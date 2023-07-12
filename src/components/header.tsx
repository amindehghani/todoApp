import React from "react"
import MoonIcon from '../images/icon-moon.svg';

export default function Header(){
    return(
        <div className="header">
            <div className="header-logo">
                TODO
            </div>
            <div className="header-mode">
                <img src={MoonIcon}/>
            </div>
        </div>
    )
}