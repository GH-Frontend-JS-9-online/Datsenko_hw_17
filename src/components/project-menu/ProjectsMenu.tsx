import React from 'react'
import './ProjectsMenu.scss'

type ProjectMenuProps = {
    projectMenuItems: Array<string>
}

const ProjectsMenu: React.FC<ProjectMenuProps> = props => {
    return (
        <ul className="projects-menu">
            {props.projectMenuItems.map((item, index) => {
                return (
                    <li key={index} className="projects-menu__item">
                        <h4>{item}</h4>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProjectsMenu
