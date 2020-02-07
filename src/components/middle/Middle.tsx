import React, {useState} from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectsItem from '../projects-item/ProjectsItem'

const Middle:React.FunctionComponent = () => {
    return (
        <div className="middle">
            <SecondMenu/>
            <ProjectsItem projectsItems={[...JSON.parse(localStorage.getItem('projectsPayloads') as any)]} />
        </div>
    )
}
export default Middle
