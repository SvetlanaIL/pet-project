import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {getProfileError} from "entities/Profile/model/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import { Input } from 'shared/ui/Input/Input'

export interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button
                    theme={ButtonTheme.OUTLINED}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    labelValue={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                    id={'first'}
                />
                <Input
                    labelValue={t('Ваша фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                    id={'lastname'}
                />
            </div>
        </div>
    );
};
