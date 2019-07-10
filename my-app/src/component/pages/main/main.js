import React, {Component} from 'react';
import AppHeader from '../../app-header';
import Preview from '../../preview';
import MainAbout from '../../main-about';
import OurBest from '../../our-best';
import Footer from '../../footer';
import GotService from '../../../service/got-service';
import {withRouter} from 'react-router-dom';

class Main extends Component {
    gotService = new GotService();

    render () {
        return (
            <>
                <div className='preview'>
                    <div className='container'>
                        <AppHeader/>
                        <Preview/>                       
                    </div>
                </div>
                <MainAbout/>
                <OurBest onItemSelected={(name) => this.props.history.push(`/beans/${name}`)} getData={this.gotService.getBestSellers}/>
                <Footer/> 
            </>
        )
    }
}

export default withRouter(Main)