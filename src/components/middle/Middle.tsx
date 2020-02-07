import React, {useState} from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectsItem from '../projects-item/ProjectsItem'

const Middle:React.FunctionComponent = () => {
    return (
        <div className="middle">
            <SecondMenu amountProjects={[...JSON.parse(localStorage.getItem('projectsPayloads') as any)].length}/>
            <ProjectsItem projectsItems={[...JSON.parse(localStorage.getItem('projectsPayloads') as any)]} />
        </div>
    )
}
export default Middle
