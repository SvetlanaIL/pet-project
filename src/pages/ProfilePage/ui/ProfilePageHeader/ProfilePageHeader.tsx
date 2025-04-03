import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilrPageHeader.module.scss';

export interface ProfilrPageHeaderProps {
    className?: string,
}

export const ProfilrPageHeader = ({className}: ProfilrPageHeaderProps) => {
    return (
        <div className={classNames(cls.ProfilrPageHeader, {}, [className])}>
            
        </div>
    );
};
