import React, {useState} from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectsMenu from '../project-menu/ProjectsMenu'
import ProjectsItem from '../projects-item/ProjectsItem'

const Middle:React.FunctionComponent = () => {
    const projectMenuItems: Array<string> = [
        'Project title',
        'Value',
        'Deadline',
        'Time spent',
        'Progress',
        'Status',
        'Assigned to',
        ''
    ]
    return (
        <div className="middle">
            <SecondMenu amountProjects={[...JSON.parse(localStorage.getItem('projectsPayloads') as any)].length}/>
            <ProjectsMenu projectMenuItems={projectMenuItems}/>
            <ProjectsItem projectsItems={[...JSON.parse(localStorage.getItem('projectsPayloads') as any)]} />
        </div>
    )
}
export default Middle
