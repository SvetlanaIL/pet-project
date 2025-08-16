import React from 'react';
import {useTranslation} from "react-i18next";
import {Page} from "widgets/Page/ui/Page/Page";

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <Page>
            {t('Главная')}
        </Page>
    );
};

export default MainPage;