import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createGame} from '../../actions/games/GameActions.js';
//import {Route, Link, Redirect} from 'react-router-dom';
class Nav extends React.Component{
	static propTypes={
		createGame: PropTypes.func
	}    
    constructor(){
        super();
    }

    _createGame(){
        this.props.createGame();
    }

    render(){
        return(
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                Inicio
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/documentation/overview/start/">
                    Entrenamiento
                </a>
                <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="/training" >
                        General
                    </Link>
                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Tutoriales
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Ejercicios
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Profesor
                    </a>
                </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-info" onClick={this._createGame.bind(this)}>
                                <span className="icon">
                                <i className="fas fa-chess"></i>
                                </span>
                                <span>Crear partida</span>
                            </a>
                        </p>                
                        <p className="control">
                            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                                <span className="icon">
                                <i className="fas fa-user-plus"></i>
                                </span>
                                <span>
                                Registrarse
                                </span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                                <span className="icon">
                                <i className="fas fa-sign-in-alt"></i>
                                </span>
                                <span>Iniciar session</span>
                            </a>
                        </p>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/documentation/overview/start/">
                        Idioma
                        </a>
                        <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item" href="/documentation/overview/start/">
                            Ingles
                        </a>
                        </div>
                    </div>            
                </div>
            </div>
            </div>
        </nav>
        );
    }
}


/* maps to pospr 
const mapStop = (state, ownProps) => {
    return {
    		datosC: state.main.campaign.datos,
    		campaignsFilterText: state.main.campaign.campaignsFilterText,
    };
}
*/

const mapActionsToProp = (state) => {      
      return {
      			createGame:createGame
      		 };
 }

export default connect(null,mapActionsToProp())(Nav);