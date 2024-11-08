import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe('getLoginUsername', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'Ivan'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('Ivan');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
