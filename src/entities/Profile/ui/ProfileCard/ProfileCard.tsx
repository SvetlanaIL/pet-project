import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss';
import {useTranslation} from "react-i18next";
import {Input} from 'shared/ui/Input/Input'
import {Profile} from "entities/Profile";
import {Loader} from "shared/ui/Loader/Loader";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Currency} from "entities/Currency/model/types/currency";
import {CurrencySelect} from "entities/Currency";
import {Country} from "entities/Country/model/types/country";
import {CountrySelect} from "entities/Country";

export interface ProfileCardProps {
    className?: string,
    data?: Profile,
    error?: string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const {t} = useTranslation('profile');

    if (isLoading) {
        <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
            <Loader/>
        </div>
    }

    if (error) {
        <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={'Произошла ошибка при загрузке профиля'}
                text={'Попробуйте обновить страницу'}
                align={TextAlign.CENTER}
            />
        </div>
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar}/>
                </div>}
                <Input
                    labelValue={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                    id={'first'}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    labelValue={t('Ваша фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                    id={'lastname'}
                    onChange={onChangeLastname}
                />
                <Input
                    labelValue={t('Ваш возраст')}
                    value={data?.age}
                    className={cls.input}
                    id={'age'}
                    onChange={onChangeAge}
                />
                <Input
                    labelValue={t('Город')}
                    value={data?.city}
                    className={cls.input}
                    id={'city'}
                    onChange={onChangeCity}
                />
                <Input
                    labelValue={t('Введите имя пользователя')}
                    value={data?.username}
                    className={cls.input}
                    id={'city'}
                    onChange={onChangeUsername}
                />
                <Input
                    labelValue={t('Введите ссылку на аватар')}
                    value={data?.avatar}
                    className={cls.input}
                    id={'city'}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
