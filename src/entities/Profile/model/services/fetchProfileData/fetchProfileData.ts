import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "../../types/profile";
import {ThunkConfig} from "app/providers/StoreProvider";

// interface ProfileDataProps {
//     first: string;
//     lastname: string;
//     age: number;
// }

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
)