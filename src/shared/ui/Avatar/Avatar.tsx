import {classNames} from "shared/lib/classNames/classNames";
import cls from './Avatar.module.scss';
import {CSSProperties, useMemo} from "react";

export interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string,
}

export const Avatar = ({className, src, size, alt}: AvatarProps) => {

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}/>
    );
};
