import React, { Component } from 'react';
import Aluno from '../aluno/Aluno';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
    render() {
        return (
            <div className="container login">
                <div className="box">
                Matricula:
                Senha:
                
                <Aluno/>

                </div>

                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                    </form>
      </div>

            </div>
        );
    }
}

export default Login;