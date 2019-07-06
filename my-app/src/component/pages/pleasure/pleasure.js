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

                <Banner bg={'pleasure'}/>
                <section class="shop">
                    <div class="container">
                        <CoffeeAbout item={'pleasure'}/>
                        <ItemList/>
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}