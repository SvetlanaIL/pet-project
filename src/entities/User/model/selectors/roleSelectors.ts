import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../types/user';
import {StateSchema} from "app/providers/StoreProvider";

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
