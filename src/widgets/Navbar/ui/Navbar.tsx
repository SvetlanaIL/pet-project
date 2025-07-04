import React, {memo, useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUserName";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData} from "entities/User/model/selectors/getUserAuthData/getUserAuthData";
import {userActions} from "entities/User";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";

export interface NavbarProps {
    className?: string,
}

export const Navbar = memo(({className}: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Ulbi TV App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
                />
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
});


