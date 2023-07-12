import React from "react"
import lightImage from '../images/bg-desktop-light.jpg';
type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Layout({children} : Props){
    return(
        <div className="app-container">
            <img className="app-bg" src={lightImage}/>
            <div className="app-main">
                {children}
            </div>
        </div>
    )
}