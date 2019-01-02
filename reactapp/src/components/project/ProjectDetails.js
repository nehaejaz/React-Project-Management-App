import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from 'react-router-dom'

const ProjectDetails=(props)=> {
    const {project, auth}=props;
    if (!auth.uid) return <Redirect to='/signin'></Redirect>
    if(project){
        return(
            <div className='project-details container'>
        <div className="card z-depth-0">
            <div className="card-content">
                <span className='card-title'>{project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                <div>29th/April/2018 10pm</div>
            </div>
        </div>
    </div>
        )
    }
    else{
        return(
            <div className="container center">
                <p>Loading...</p>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    console.log(state);
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project= projects? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }

    

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)