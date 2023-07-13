import React from "react"
import lightImage from '../images/bg-desktop-light.jpg';
import { ColorMode } from "../types/color-mode";
import { useTheme } from "../providers/theme-provider";
type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Layout(props : Props){

    const {colorMode} = useTheme();

    return(
        <div className={`app-container ${colorMode.toLowerCase()}`}>
            <img className="app-bg" src={lightImage}/>
            <div className="app-main">
                {props.children}
            </div>
        </div>
    )
}