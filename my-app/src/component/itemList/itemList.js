import React, {Component} from 'react';
import ItemBeans from '../itemBeans';
import GotService from '../../service/got-service';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        itemList : null
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const {getData} = this.props;

        console.log(getData);

        getData()
                .then(this.renderItem)
                .catch();
    }

    renderItem = (itemList) => {
        this.setState({
            itemList
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, country, url, price, description} = item;
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
        });
    }

    render () {

        const {itemList} = this.state;
        console.log(itemList);
        const items = this.renderItems(itemList);

        return (
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="shop__wrapper">
                        {items}
                        {/* <ItemBeans/> */}
                    </div>
                </div>
            </div>
        )
    }
}