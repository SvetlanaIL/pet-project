import {Decorator} from '@storybook/react';
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUserName/model/slice/loginSlice";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
    ): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <Story/>
    </StoreProvider>
);