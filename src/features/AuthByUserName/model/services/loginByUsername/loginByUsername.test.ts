import axios from 'axios';
import {loginByUsername} from "./loginByUsername";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    test('success login', async () => {
        const userValue = {username: '123', id: '1'};
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data:userValue}));
        const action = loginByUsername({username: '123', password: '123'});
        // @ts-ignore
        const result = await action(dispatch, getState, undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const action = loginByUsername({username: '123', password: '123'});
        // @ts-ignore
        const result = await action(dispatch, getState, undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});