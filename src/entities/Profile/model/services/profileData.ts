import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {Profile} from "entities/Profile";

interface ProfileDataProps {
    first: string;
    lastname: string;
    age: number;
}

export const profileData = createAsyncThunk<Profile, {rejectValue: string}>(
    'profile/profileData',
    async (meta: any, thunkAPI) => {
        try {
            const response = await axios.get<Profile>('http://localhost:8000/profile', meta);
            console.log(response)

            // if (!response.data) {
            //     throw new Error();
            // }
            //
            // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            // thunkAPI.dispatch(userActions.setAuthData(response.data));
            //
            // return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
)