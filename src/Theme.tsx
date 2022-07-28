import { useMemo } from 'react';
import React from "react";
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';


export default function Locales({ children }: { children: JSX.Element }) {
    const theme = useTheme()
    type SupportedLocales = keyof typeof locales;
    const locale = 'en';
    // Create a theme instance.
    const themeWithLocale = useMemo(() => {
        return createTheme({
            ...theme,
            palette: {
                primary: {
                    main: 'rgb(2, 116, 107)',
                },
                secondary: {
                    main: '#19857b',
                },
                error: {
                    main: red.A400,
                },
            },
        }
            , locales[locale as SupportedLocales])
    }, [locale]);

    return (<ThemeProvider theme={themeWithLocale}>
        {children}</ThemeProvider>)

}