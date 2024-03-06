import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from 'react-i18next';

export interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru');
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}>
            {t(short ? 'Короткия язык' : 'Язык')}
        </Button>
    );
};
