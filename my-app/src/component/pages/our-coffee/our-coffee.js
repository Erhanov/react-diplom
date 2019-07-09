import React, {Component} from 'react';
import Banner from '../../banner';
import CoffeeAbout from '../../coffee-about';
import Filter from '../../filter';
import ItemList from '../../itemList';
import Footer from '../../footer';
import GotService from '../../../service/got-service';

export default class OurCoffee extends Component {

    gotService = new GotService();

    render () {
        return (
            <>

                <Banner bg={'banner'}/>
                <section class="shop">
                    <div class="container">
                        <CoffeeAbout/>
                        <Filter/>
                        <ItemList getData={this.gotService.getCoffee}/>
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}