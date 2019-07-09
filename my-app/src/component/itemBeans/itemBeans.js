import React, {Component} from 'react';

export default class ItemBeans extends Component {


    render () {

        return (
            <div class="shop__item">
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                <div class="shop__item-title">
                    Solimo Coffee Beans 2kg
                </div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">10.73$</div>
            </div>
        )
    }
}