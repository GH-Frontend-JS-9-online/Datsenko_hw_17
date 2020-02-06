import React from 'react'
import './TopMenu.scss'

const TopMenu: React.FunctionComponent<{topMenuIcons: Array<string>}> = (props) => {
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




