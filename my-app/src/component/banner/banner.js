import React, {Component} from 'react';
import AppHeader from '../app-header';

export default class Banner extends Component {
    render () {

        const {bg} = this.props;
        let title;
        if (bg === 'pleasure') {title = 'For your pleasure'} else {title = 'Our coffee'}
    
        return (
            <div className={bg}>
                <div className="container">
                    <AppHeader/>
                    <h1 className="title-big">{title}</h1>
                </div>
            </div>
        )
    }
}