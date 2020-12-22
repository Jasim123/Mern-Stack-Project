import React, { Component } from "react";
import AdminUserDataService from "../services/adminuser.service";

class Login extends Component {
    constructor(props){
        super(props);
        this.onChangeuserName = this.onChangeuserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);
        this.state ={
            user_name : '',
            user_password: '',
            user_details : {}
        }

   }

   login() {
       const data = {
        user_name : this.state.user_name,
        user_password: this.state.user_password
       }
    AdminUserDataService.login(data)
        .then(response => {
            if (response.data.status === 200){
                this.setState({
                    user_details: response.data
                   });
                   console.log('ekjcnjec',response.data);
                   localStorage.setItem('loginDetails', JSON.stringify(this.state.user_details.data));
                   if(this.state.user_details.data.user_role === 'Admin'){
                    this.props.history.push('/users');
                   }

                   else {
                    this.props.history.push('/profile');
                   }
                  
                // this.props.history.push({
                //     pathname : '/users',
                //     data: this.state.user_details.data
                // })

            }
            
            else {
                
                alert(response.data.msg)
            }
          })
          .catch(e => {
            console.log(e);
          });
         
    }



onChangeuserName(e){
    this.setState({
        user_name: e.target.value
      });
}

onChangePassword(e){
    this.setState({
        user_password: e.target.value
      });
}

    render() {
        return (
            <div>
                <div className="row" style={{marginTop:'10%'}}>
                    <div  className ="col-md-6">

                    </div>
                    <div  className ="col-md-6">
                    <h1>Login</h1>
                <div className="row">
                <div className="form-group col-md-8">
                  <label htmlFor="userName">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    required
                    value={this.state.user_name}
                    onChange={this.onChangeuserName}
                    name="title"
                  />
                </div>
    
                <div className="form-group col-md-8">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    required
                    value={this.state.user_password}
                    onChange={this.onChangePassword}
                    name="description"
                  />
                </div>
                </div>
                <button onClick={this.login} className="btn btn-success">
                  Submit
                </button>
              
                    </div>

                </div>
                
                </div>
          )}
    }

    export default Login;