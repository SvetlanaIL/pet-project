import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile, ValidateProfileError} from "../../types/profile";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getProfileFormdata} from "../../selectors/getProfileFormdata/getProfileFormdata";
import {validateProfileData} from "entities/Profile/model/services/validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {extra, rejectWithValue, getState} = thunkAPI;

            const formData = getProfileFormdata(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

                return response.data
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
)