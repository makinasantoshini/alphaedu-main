import axios from 'axios';
import React, {Component} from 'react';
import "../styles/loginform.css";

export default class Login extends Component {
     
      handleSubmit = e => {
          e.preventDefault();

          const data = {
              email: this.email,
              password: this.password
          }

          axios.post('http://192.168.1.28:8080//postRegistration', data)
          .then(res => {
              localStorage.setItem('token', res.data.token);
          })
          .catch(err => {
              console.log(err)
          })
      };

    render() {
        return (

            <>

            <div className="login">
            <form  onSubmit={this.handleSubmit}>
            <h3>Login</h3>

        
            <div className="form-group">
                <label>User Id</label>
                <input type="email" className="form-control" placeholder="Email" 
                onChange={e => this.email = e.target.value}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                 onChange={e => this.password = e.target.value}/>
            </div>
           
           <div align="center">
            <button className="btn btn-primary">Login</button>
            </div>
        </form>
        </div>

        </>
        )
    }
}