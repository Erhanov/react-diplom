import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from '../pages/main';
import OurCoffee from '../pages/our-coffee';
import Pleasure from '../pages/pleasure';


import '../../css/style.css';

export default class App extends Component {
  render () {
    return (
      	<>

			<Router>
				<Route path='/' exact component={Main} />
				<Route path='/coffee' exact component={OurCoffee} />
				<Route path='/pleasure' exact component={Pleasure} />
			</Router>
      		
	

			{/* <Banner bg={'banner'}/>
			<ItemCoffee/>
			<Footer/>
 			*/}


			

      	</>
    );
  }
  
}


