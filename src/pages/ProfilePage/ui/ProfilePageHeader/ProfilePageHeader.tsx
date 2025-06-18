import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeader.module.scss';
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {fetchProfileData, getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={'Профиль'}/>
            {readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEdit}
                    >
                        {'Редактировать'}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {'Отменить'}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINED}
                            onClick={onSave}
                        >
                            {'Сохранить'}
                        </Button>
                    </>
                )}
        </div>
    );
};
