import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from '../pages/main';
import OurCoffee from '../pages/our-coffee';
import Pleasure from '../pages/pleasure';
import CoffeeItem from '../pages/coffee-item';
import GotService from '../../service/got-service';

import '../../css/style.css';

export default class App extends Component {
	gotService = new GotService();

  	render () {
		return (
			<>
				<Router>
					<Route path='/' exact component={Main} />
					<Route path='/beans' exact render={() => <OurCoffee getData={this.gotService.getCoffee}/>} />
					<Route path='/pleasure' exact component={Pleasure} />
					<Route path='/beans/:name' exact render={
							({match}) => {
                                const {name} = match.params;

                                return <CoffeeItem name={name} />
							}
						}/>
				</Router>
				
				{/* <Banner bg={'banner'}/>
				<ItemCoffee/>
				<Footer/>
				*/}
			</>
		);
  	}
  
}


