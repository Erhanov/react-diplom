import React, {Component} from 'react';
import Banner from '../../banner';
import CoffeeAbout from '../../coffee-about';
import ItemList from '../../itemList';
import Footer from '../../footer';
import GotService from '../../../service/got-service';

export default class OurCoffee extends Component {
    gotService = new GotService();

    render () {
        return (
            <>

                <Banner bg={'pleasure'}/>
                <section className="shop">
                    <div className="container">
                        <CoffeeAbout item={'pleasure'}/>
                        <ItemList page={'pleasure'} getData={this.gotService.getGoods}/>
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}