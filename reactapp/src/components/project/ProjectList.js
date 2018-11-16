import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {projects && projects.map(projects=>{
                return(
                    <Link to={'/project/' + projects.id}>
                    <ProjectSummary projects={projects} key={projects.id}/>
                    </Link>
                )

            }
            )}
        </div>
    )
}
export default ProjectList

