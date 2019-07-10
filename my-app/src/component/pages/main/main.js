import React, {Component} from 'react';
import AppHeader from '../../app-header';
import Preview from '../../preview';
import MainAbout from '../../main-about';
import OurBest from '../../our-best';
import Footer from '../../footer';
import GotService from '../../../service/got-service';


export default class Main extends Component {
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
                <OurBest getData={this.gotService.getBestSellers}/>
                <Footer/> 
            </>
        )
    }
}