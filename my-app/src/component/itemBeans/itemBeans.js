import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ItemBeans extends Component {

    renderItemsCoffee(arr) {
        return arr.map(item => {
            const {name, country, url, price} = item;
            return (
                <div onClick={(name) => {
                        this.props.history.push(name)
                    }} key={name} className="shop__item">
                    <img src={url} alt="coffee"></img>
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}$</div>
                </div>
            )
        });
    }

    renderItemsBest(arr) {
        return arr.map(item => {
            const {name, url, price} = item;
            return (
                <div key={name} className="best__item">
                    <img src={url} alt="coffee"></img>
                    <div className="best__item-title">
                        {name}
                    </div>
                    <div className="best__item-price">{price}$</div>
                </div>
            )
        })
    }


    render () {

        const {itemList, page} = this.props;
        const elementsCoffee = this.renderItemsCoffee(itemList);
        const elementsBest = this.renderItemsBest(itemList);

        // 

        if (page === 'coffee') {
            return (
                <div className="shop__wrapper">
                    {elementsCoffee}
                </div>
            )
        } else {
            return (
                <div className="best__wrapper">
                    {elementsBest}
                </div>
            )
        }

        
    }
}

export default withRouter(ItemBeans);