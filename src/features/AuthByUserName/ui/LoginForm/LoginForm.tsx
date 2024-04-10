import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import {Input} from "shared/ui/Input/Input";

export interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({className}: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                labelValue='Введите имя'
                id='name'
            />
            <Input
                labelValue='Введите пароль'
                id='password'
            />
        </div>
    );
};
