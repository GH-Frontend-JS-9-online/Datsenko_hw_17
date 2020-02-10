import React from 'react'
import './AddProject.scss'

type AddProjectProps = {
    addProjectDisplay: string
}

const AddProject:React.FC<AddProjectProps> = props => {

    let addProject: any = React.createRef()
    const close = ():void => {
        addProject.current.style.display = 'none'
    }

    return(
        <div ref={addProject} className="add-project" style={{display: props.addProjectDisplay}}>
            <div className="close" onClick={close}></div>
            <h1>Create new project</h1>
            <form action="#" className="add-project__form">
                <input type="text" placeholder="Title..."/>
                <input type="text" placeholder="Company..."/>
                <input type="text" placeholder="Cost..."/>
                <input type="text" placeholder="Deadline..."/>
                <input type="text" placeholder="Assigned..."/>
            </form>
        </div>
    )
}

export default AddProject
