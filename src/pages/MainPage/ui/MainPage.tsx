import React from 'react';
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {Counter} from "entities/Counter";

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            {t('Главная')}
        </div>
    );
};

export default MainPage;