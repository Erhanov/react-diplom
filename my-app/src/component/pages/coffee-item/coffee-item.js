import React, {Component} from 'react';
import Banner from '../../banner';
import ItemCoffee from '../../itemCoffee';
import Footer from '../../footer';
import GotService from '../../../service/got-service';

export default class CoffeeItem extends Component {

	gotService = new GotService();

  	render () {
		const {itemName} = this.props;

		return (
			<>
				<Banner bg={'banner'}/>
				<ItemCoffee coffeeName={itemName} getData={this.gotService.getCoffee}/>
				<Footer/>
			</>
		);
  	}
  
}
