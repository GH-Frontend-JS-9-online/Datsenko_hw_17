import React from 'react'
import './Main.scss'
import Aside from '../aside/Aside'
import Middle from '../middle/Middle'

const Main:React.FunctionComponent = () => {
    const asideMenuIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    return (
        <main className="main">
            <Aside asideMenuIcons={asideMenuIcons}/>
            <Middle/>
        </main>
    )
}

export default Main
