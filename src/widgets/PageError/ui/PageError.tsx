import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import {use} from "i18next";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

export interface PageErrorProps {
    className?: string,
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
