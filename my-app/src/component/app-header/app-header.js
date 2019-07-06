import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from './img/Logo.svg';

export default class AppHeader extends Component {
    render () {
        return (
            <div className='row'>
                <div class="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <Link to='/'>
                                    <img src={Logo} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to='/coffee'>Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to='pleasure'>For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </div> 
        )
    }
}