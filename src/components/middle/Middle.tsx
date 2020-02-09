import React, {useState} from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectsMenu from '../project-menu/ProjectsMenu'
import ProjectsItem from '../projects-item/ProjectsItem'
import DashboardApiServices from "../../services/DashboardServices";
import Project from "../../services/Project";

const Middle:React.FunctionComponent = () => {
    let svc = new DashboardApiServices()
    svc.getProjectsInfo(JSON.parse(localStorage.getItem('token') as any) ,(projects: Project) => {
        localStorage.setItem('projects', JSON.stringify(projects))
        console.table(projects)
    })
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
            <SecondMenu amountProjects={[...JSON.parse(localStorage.getItem('projects') as any).projects].length}/>
            <ProjectsMenu projectMenuItems={projectMenuItems}/>
            <ProjectsItem projectsItems={[...JSON.parse(localStorage.getItem('projects') as any).projects]} />
        </div>
    )
}
export default Middle
