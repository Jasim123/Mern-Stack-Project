import React, { Component } from "react";
import AdminUserDataService from "../services/adminuser.service";
import Header from "./header";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTele = this.onChangeTele.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeSSNno = this.onChangeSSNno.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.state ={
            first_name: '',
            last_name: '',
            telephone_no: '',
            address:'',
            SSN_no:'',
            userDetails : JSON.parse(localStorage.getItem('loginDetails')),
        }
    }

saveUser(){
    console.log('this.state', this.state);
const data ={
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    telephone_no: this.state.telephone_no,
    address: this.state.address,
    SSN_no: this.state.SSN_no,
    user: this.state.userDetails._id
}
    AdminUserDataService.saveUser(data).then(response =>{
console.log(response.data);
    })
    .catch(e=>{
        console.error(e)
    })
}

onChangeLastName(e){
    this.setState({
        last_name: e.target.value
      });
}

onChangeTele(e){
    this.setState({
        telephone_no: e.target.value
      });
}
onChangeAddress(e){
    this.setState({
        address: e.target.value
      });
}
onChangeSSNno(e){
    this.setState({
        SSN_no: e.target.value
      });
}


onChangeFirstName(e){
    this.setState({
        first_name: e.target.value
      });
}



    render() {
      return (
        <div>
            <Header/>
            <h1>Profile</h1>
            <div style={{padding:'3%'}}>
            <div className = "row">
            <div className="form-group col-md-4">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="telephone_no">TelePhone No</label>
              <input
                type="text"
                className="form-control"
                id="telephone_no"
                required
                value={this.state.telephone_no}
                onChange={this.onChangeTele}
                name="telephone_no"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="SSNno">SSN No</label>
              <input
                type="text"
                className="form-control"
                id="SSNno"
                required
                value={this.state.SSN_no}
                onChange={this.onChangeSSNno}
                name="SSNno"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastName">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>
</div>
            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
            </div>
      )}
    
    }

    export default Profile;