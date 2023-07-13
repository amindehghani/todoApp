import React, { MouseEventHandler } from "react"
import MoonIcon from '../images/icon-moon.svg';
import { useTheme } from "../providers/theme-provider";



export default function Header(){

    const {colorMode, setColorMode} = useTheme()

    function onModeClick(){
        setColorMode(colorMode === "Light" ? "Dark" : "Light");
    }

    return(
        <div className="header">
            <div className="header-logo">
                TODO
            </div>
            <div onClick={onModeClick} className="header-mode">
                <img src={MoonIcon}/>
            </div>
        </div>
    )
}