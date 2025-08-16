import React, {FC, useMemo, useState} from 'react';
import {ThemeContext} from "../../../../shared/lib/context/ThemeContext";
import {Theme} from "shared/const/theme";
import {LOCAL_STORAGE_THEME_KEY} from "shared/const/localstorage";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProviderProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;