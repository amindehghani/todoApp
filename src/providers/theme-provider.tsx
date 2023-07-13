import React, { createContext, useContext, useState } from "react";
import { ColorMode } from "../types/color-mode";

export function createThemeCtx<A>(defaultValue: ColorMode){
    type UpdateValue = React.Dispatch<React.SetStateAction<ColorMode>>;

    const defaultUpdate : UpdateValue = () => defaultValue;

    const themeCtx = createContext({
        colorMode: defaultValue,
        setColorMode: defaultUpdate
    });

    function TProvider(props: React.PropsWithChildren<{}>){
        const [colorMode, setColorMode] = useState<ColorMode>(defaultValue);
        return(
            <themeCtx.Provider
            value={{colorMode, setColorMode}}
            {...props}
            />
        )
    }

    return [themeCtx, TProvider] as const;
}

const [themeCtx, TProvider] = createThemeCtx("Light");

export const ThemeContext = themeCtx;

export function ThemeProvider({children} : any){
    return <TProvider>{children}</TProvider>
}

export function useTheme(){
    return useContext(ThemeContext);
}