import React, {Component} from 'react';
import Banner from '../../banner';
import CoffeeAbout from '../../coffee-about';
import Filter from '../../filter';
import ItemList from '../../itemList';
import Footer from '../../footer';

export default class OurCoffee extends Component {
    render () {
        return (
            <>

                <Banner bg={'banner'}/>
                <section class="shop">
                    <div class="container">
                        <CoffeeAbout/>
                        <Filter/>
                        <ItemList/>
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}