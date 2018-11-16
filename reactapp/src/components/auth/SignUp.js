import React, {Component} from 'react'


class SignUp extends Component {
    state={
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }
    SubmitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state);
    }
    ChangeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.SubmitHandler} className="white">
            <h4 className="grey-text text-darken-4">Sign Up</h4>
            <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" onChange={this.ChangeHandler}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" onChange={this.ChangeHandler}/>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.ChangeHandler}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.ChangeHandler}/>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">
                    SignUp
                </button>
            </div>
        </form>
        
      </div>
    )
  }
}

export default SignUp