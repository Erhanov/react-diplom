import React, {Component} from 'react';
import LogoBlack from './logo/Logo_black.svg';
import BeansLogoDark from './logo/Beans_logo_dark.svg';

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-4">
                            <ul className="footer">
                                <li className="footer__item">
                                    <a href="#">
                                        <img src={LogoBlack} alt="logo"></img>
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#">Our coffee</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#">For your pleasure</a>
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