import React from 'react'
import './TopMenu.scss'

interface TopMenuIconsProps {
    topMenuIcons: Array<string>
}

const TopMenu: React.FunctionComponent<TopMenuIconsProps> = props => {
    return (
        <ul className="top-nav__menu">
            {props.topMenuIcons.map((item, index) => {
              return (
                  <li key={index} className="top-nav__menu__item">
                      <a href="/" className="top-nav__menu__link" >
                          <i className={`fas fa-${item}`}></i>
                      </a>
                  </li>
              )
            })}
        </ul>
    )
}

export default TopMenu




