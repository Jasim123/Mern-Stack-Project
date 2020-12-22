import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

constructor(props){
super(props);
this.state ={
    userDetails : JSON.parse(localStorage.getItem('loginDetails')),
}
}

componentDidMount(){
    console.log('this.rtyuui', this.state.userDetails);
}
// AdminCheck(){
//     const userDetails = JSON.parse(localStorage.getItem('loginDetails'));

//     if(userDetails.user_role === 'Admin'){
//         console.log('hcbsh', userDetails.user_role)
//         return (<AdminNav/>)
//     }
//     else {
//         return (<span></span>)
//     }
// }

    render(){
        return(
            <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">MERN-Stack App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                
                {this.state.userDetails.user_role === "Admin"?(<li className="navbar-item">
        <Link to="/Users" className="nav-link">Users List </Link>
      </li>):(null)}
                <li className="navbar-item">
                  <Link to="/profile" className="nav-link">View User</Link>
                </li>
              </ul>
              <ul class="nav justify-content-end">
  <li class="nav-item">
  <Link to="/" className="nav-link">Logout</Link>
  </li>
  </ul>
            </div>
          </nav>
               
            </div>
        )
    }
}

export default Header;