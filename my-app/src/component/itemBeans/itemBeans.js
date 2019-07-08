import React, {Component} from 'react';

export default class ItemBeans extends Component {
    render () {
        
        const {name, price, url, country} = this.PaymentResponse;

        return (
            <div class="shop__item">
                <img src={url} alt="coffee"></img>
                <div class="shop__item-title">
                    {name}
                </div>
                <div class="shop__item-country">{country}</div>
                <div class="shop__item-price">{price}$</div>
            </div>
        )
    }
}