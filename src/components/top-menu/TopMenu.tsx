import React, {useState} from 'react'
import './TopMenu.scss'
import AddProject from '../add-project/AddProject'

interface TopMenuIconsProps {
    topMenuIcons: Array<string>
}

const TopMenu: React.FunctionComponent<TopMenuIconsProps> = props => {
    const [isShowProject, setShowProject] = useState(false)
    const toggleHandler = (id: number):void =>  {
        if (id === 0) {
            setShowProject(!isShowProject)
        }
    }
    return (
        <>
            <ul className="top-nav__menu">
                {props.topMenuIcons.map((item, index) => {
                  return (
                      <li key={index} onClick={(event) => toggleHandler(index)} className="top-nav__menu__item">
                          <a href="#" className="top-nav__menu__link" >
                              <i className={`fas fa-${item}`}></i>
                          </a>
                      </li>
                  )
                })}
            </ul>
            <AddProject addProjectDisplay={(isShowProject) ? 'block' : 'none'}/>
         </>
    )
}

export default TopMenu




