import React, {Component} from 'react';
import Banner from '../../banner';
import CoffeeAbout from '../../coffee-about';
import ItemList from '../../itemList';
import Footer from '../../footer';
import GotService from '../../../service';

export default class OurCoffee extends Component {
    gotService = new GotService();

    render () {
        return (
            <>

                <Banner bg={'pleasure'}/>
                <section class="shop">
                    <div class="container">
                        <CoffeeAbout item={'pleasure'}/>
                        <ItemList getData={this.gotService.getGoods}/>
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}