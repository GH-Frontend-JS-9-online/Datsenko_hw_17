import React, {Component} from 'react'
import './TopMenu.scss'

type TopMenuProps = {
    topMenuIcons: Array<string>
}

export const TopMenu = ({topMenuIcons}:TopMenuProps) => {
    return (
        <ul className="top-nav__menu">
            {topMenuIcons.map((item, index) => {
              return (
                  <li key={index} className="top-nav__menu__item">
                      <a href="#" className="top-nav__menu__link" >
                          <i className={`fas fa-${item}`}></i>
                      </a>
                  </li>
              )
            })}
        </ul>
    )
}




