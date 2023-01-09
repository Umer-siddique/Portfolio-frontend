import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

import { useProjectContext } from '../hooks/useProjectContext';

const ProjectList = ({ projectsData }) => {

    const { dispatch } = useProjectContext()

    const deleteProject = async (id) => {
        const deletedResponse = await fetch(`http://localhost:5000/api/projects/${id}`, {
            method: "delete"
        })
        const json = await deletedResponse.json()
        console.log("Deleted Projects:", json)
        if (deletedResponse.ok) {
            dispatch({
                type: "DELETE_PROJECT",
                payload: json
            })
        }
    }

    return (
        <div className='project-list'>
            <div className='card'>
                <div className='card-img'>
                    <img src={projectsData.projectImage} alt="" />
                </div>
                <div className='card-info'>
                    <h2>{projectsData.title}</h2>
                    <div>
                      {
                        projectsData.technology.map((tech)=><strong key={tech}>{tech}</strong>)
                      }
                    </div>
                    <p>{projectsData.description.substring(0, 65)}...</p>
                    <div className='card-btn'>
                        <a href={projectsData.projectUrl} target="_blank" rel="noreferrer">View Project</a>
                        <Link to={`/projects/${projectsData._id}`}>Project Details</Link>
                    </div>
                    {/* <div className='icon-container' title="Delete project" onClick={() => deleteProject(projectsData._id)}>
                        <DeleteIcon className="icon" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectList