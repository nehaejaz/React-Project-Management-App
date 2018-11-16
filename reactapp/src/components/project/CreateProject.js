import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions'
import {connect} from 'react-redux'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''

    }
    SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state)

    }

    ChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.SubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create a Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.ChangeHandler} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className='materialize-textarea' id="content" cols="30" rows="10" onChange={this.ChangeHandler}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">
                            Create Project
                            </button>
                    </div>
                </form>
            </div>

        )
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        createProject: (project)=>dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps) (CreateProject)
