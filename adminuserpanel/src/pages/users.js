import React, { Component } from "react";
import AdminUserDataService from "../services/adminuser.service";
import Header from "./header";
const UserRow = props => (
    <tr>
        <td>{props.user.user_name}</td>
        <td>{props.user.user_email}</td>
        <td>{props.user.user_role}</td>
        <td>
         View
        </td>
    </tr>
    
)
class Users extends Component {

    constructor(props){
        super(props);
        this.getAllUsers = this.getAllUsers.bind(this);

        this.state= {
            users : [],
            userData : JSON.parse(localStorage.getItem('loginDetails')),
        }
    }
    handleView(){
        console.log('handleView');
    }

    getAllUsers(){
        
        AdminUserDataService.getAllUsers()
              .then(response => {
                this.setState({
                  users: response.data
                });
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          
        
    }

    componentDidMount() {
        console.log('vgcvce', this.state);
        // console.log('vgcvce', this.props.location.data);
        //if(this.state.userData.user_role === 'Admin'){
            this.getAllUsers();
        // }
        // else {
        //     alert('you are not a admin');
        // }
      }

      DataTable(){
  return this.state.users.map(function(Currentuser, i){
    return <UserRow user={Currentuser} key={i} />;
})
      }
    render() {
      return (
        <div>
            <Header/>
            <h1>Users</h1>
            {/* {{this.state.users}} */}
            <div className="table-wrapper">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>
            </div>
      )}
    
    }

    export default Users