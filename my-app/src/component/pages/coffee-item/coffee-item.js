import React, {Component} from 'react';
import Banner from '../../banner';
import ItemCoffee from '../../itemCoffee';
import Footer from '../../footer';
import GotService from '../../../service/got-service';
import Spinner from '../../spinner';
import ErrorMessage from '../../error-message';

export default class CoffeeItem extends Component {
  	render () {
		const {name} = this.props;
		console.log(name)

		return (
			<>
				<Banner bg={'banner'}/>
				<ItemCoffee/>
				<Footer/>
			</>
		);
  	}
  
}
