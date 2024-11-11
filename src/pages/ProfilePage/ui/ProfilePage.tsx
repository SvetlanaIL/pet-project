import React from 'react';
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {classNames} from "shared/lib/classNames/classNames";
import {profileReducer} from "entities/Profile";

const initialReducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    classname?: string;
}

const ProfilePage = ({classname}: ProfilePageProps) => {
    const { t } = useTranslation('ProfilePage');


    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [classname])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;