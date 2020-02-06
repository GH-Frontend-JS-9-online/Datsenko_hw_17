import React, {Component} from 'react'
import './Aside.scss'

type AsideMenuProps = {
    asideMenuIcons: Array<string>
}

const Aside = ({asideMenuIcons}:AsideMenuProps) => {
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav__menu">
                    {asideMenuIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside__nav__menu__item">
                                <a href="#" className="aside__nav__menu__link" >
                                    <i className={`fas fa-${item}`}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
export default Aside

