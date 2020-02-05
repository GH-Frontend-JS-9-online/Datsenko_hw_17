import React, {Component} from 'react'
import './AppHeader.scss'
import {TopMenu} from '../top-menu/TopMenu'

const logo = require('../../assets/images/header/logo.png')
// const plus = require('../../assets/images/header/plus.png')
// const search = require('../../assets/images/header/search.png')
// const bell = require('../../assets/images/header/bell.png')
// const ellipse = require('../../assets/images/header/ellipse.png')

const AppHeader:React.FC = () => {
    let topMenuIcons: Array<string> = ['plus', 'search', 'bell', 'circle']
    return (
        <header className="header">
            <nav className="top-nav">
                <a href="#" className="top-nav__logo">
                    <img src={logo} alt="logo"/>
                </a>
                <TopMenu topMenuIcons={topMenuIcons}/>
            </nav>
        </header>
    )
}

export default AppHeader



