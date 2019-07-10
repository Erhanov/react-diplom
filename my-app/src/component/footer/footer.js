import React, {Component} from 'react';
import LogoBlack from './logo/Logo_black.svg';
import BeansLogoDark from './logo/Beans_logo_dark.svg';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-4">
                            <ul className="footer">
                                <li className="footer__item">
                                    <Link to='/'>
                                        <img src={LogoBlack} alt="logo"></img>
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link to='/beans'>Our coffee</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to='/pleasure'>For your pleasure</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                </div>
            </footer> 
        )
    }
}