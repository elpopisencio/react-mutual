import React, { Component } from 'react';

class Ingresar extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: '',
            contra: ''
        }
    }

    handleUsuario = (event) => {
        let usu = event.target.value;
        this.setState({
            usuario: usu
        })
    }

    handleContra = (event) => {
        let con = event.target.value;
        this.setState({
            contra: con
        })
    }

    handleLogin = () => {
        this.props.handleLogin(this.state.usuario, this.state.contra);
    }

    render() {
        return (
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <img src="http://192.168.0.244/logo2.jpg" />
                        <br/>
                        <br/>
                        <input className="input is-info" type="text" value={this.state.usuario} size="40" placeholder="Nombre de Usuario" onChange={this.handleUsuario} style={{width:"auto"}}/>
                        <br/>
                        <br/>
                        <input className="input is-info" type="password" value={this.state.contra} size="40" placeholder="Contraseña" onChange={this.handleContra} style={{width:"auto"}}/>
                        <br/>
                        <br/>
                        <a class="button is-info" onClick={this.handleLogin}>Ingresar</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Ingresar;
