import React, {Component} from 'react'
import './Main.scss'
import Aside from '../aside/Aside'

const Main:React.FunctionComponent = () => {
    const asideMenuIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    return (
        <main className="main">
            <Aside asideMenuIcons={asideMenuIcons}/>
        </main>
    )
}

export default Main
