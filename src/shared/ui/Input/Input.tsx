import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number;
    labelValue?: string,
    id: string,
    onChange?: (value: string) => void,
    autofocus?: boolean;
    readonly?: boolean;
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
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    return (
        <div className={classNames(cls.Input, mods, [className])}>
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
                readOnly={readonly}
            />
        </div>
    );
});

