import React from 'react'
import './ProjectsItem.scss'

type ProjectsItemProps = {
    projectsItems: Array<any>
}

const ProjectItem: React.FC<ProjectsItemProps> = props => {
    const convertDate = (payLoadDate:string):string => {
        const monthNames:Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
        const date: Date = new Date(payLoadDate)
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }
    return (
        <>
            {props.projectsItems.map(({ title, timeSpent, company, cost, deadline, progress, status, assigned, _id }) => {
                return (
                    <ul key={_id as any} className="projects" style={
                        { borderColor: (progress === 0) ? '#e2e3e8' :  (progress === 100) ? '#4caf50' : '#2196f3'}
                    }>
                        <li className="projects__item">
                            <div className="title">
                                <h4>{title}</h4>
                                <p>{company}</p>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="value">
                                <h4>{cost}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="deadline">
                                <h4>{`${convertDate(deadline)}`}</h4>
                                <p>10 days left</p>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="time-spent">
                                <h4>{`${timeSpent} hours`}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="progress">
                                <h4>{`${progress}%`}</h4>
                                <div><span style={
                                    {width: `${progress}%`, background:(progress === 0) ? '#9ea3b4' :  (progress === 100) ? '#4caf50' : '#2196f3' }
                                }></span></div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="status">
                                <h4>{status}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="assigned">
                                <i className="fas fa-circle"></i>
                                <div>
                                    <h4>{assigned.name}</h4>
                                    <p>{assigned.position}</p>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="ellipsis">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </>
    )
}

export default ProjectItem
