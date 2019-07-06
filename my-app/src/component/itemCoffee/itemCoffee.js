import React, {Component} from 'react';
import BeansLogoDark from './logo/Beans_logo_dark.svg';
import CoffeeItem from './img/coffee_item.jpg';

export default class Banner extends Component {
    render () {
        return (
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 offset-1">
                            <img class="shop__girl" src={CoffeeItem} alt="coffee_item"></img>
                        </div>
                        <div class="col-lg-4">
                            <div class="title">About it</div>
                            <img class="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div class="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div class="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div class="shop__point">
                                <span>Price:</span>
                                <span class="shop__point-price">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}