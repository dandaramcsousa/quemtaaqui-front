import React, { Component } from 'react';
import Aluno from '../aluno/Aluno';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                Matricula:
                Senha:
                <Aluno/>

                </div>

            </div>
        );
    }
}

export default Login;