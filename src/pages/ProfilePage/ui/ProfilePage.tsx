import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {classNames} from "shared/lib/classNames/classNames";
import {fetchProfileData, ProfileCard, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const initialReducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    classname?: string;
}

const ProfilePage = ({classname}: ProfilePageProps) => {
    const { t } = useTranslation('ProfilePage');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [classname])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;