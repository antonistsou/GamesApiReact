import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        gray:
        {
            50: '#f2f3f352',
            100: '#dadada52',
            200: '#c0c0c052',
            300: '#a7a7a752',
            400: '#8e8e8e52',
            500: '#75757552',
            600: '#5a5a5a52',
            700: '#40404052',
            800: '#27272752',
            900: '#111',
        }
    }
});

export default theme;



