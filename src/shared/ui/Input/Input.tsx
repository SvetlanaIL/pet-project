import {classNames} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string;
    labelValue?: string,
    id: string,
    onChange?: (value: string) => void,
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        labelValue,
        id,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <label
                htmlFor={id}
            >
                {labelValue}
            </label>
            <input
                id={id}
                type='text'
                onChange={onChangeHandler}
                value={value}
            />
        </div>
    );
});

