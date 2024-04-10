import {classNames} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';

export interface InputProps {
    className?: string,
    labelValue: string,
    id: string
}

export const Input = ({className, labelValue, id}: InputProps) => {
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <label htmlFor={id}>{labelValue}</label>
            <input id={id} type='text'/>
        </div>
    );
};
