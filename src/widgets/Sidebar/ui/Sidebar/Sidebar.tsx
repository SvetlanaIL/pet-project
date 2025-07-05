import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {getSidebarItems} from "widgets/Sidebar/model/selectors/getSidebarItems";
import {useSelector} from "react-redux";
import {VStack} from "shared/ui/Stack";

export interface SidebarProps {
    className?: string,
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role='navigation' className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </aside>
    );
});
