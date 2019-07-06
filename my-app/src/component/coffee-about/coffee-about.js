import React, {Component} from 'react';
import CoffeeGirl from './img/coffee_girl.jpg';
import PleasureCoffee from './img/pleasure_coffee.png';
import BeansLogoDark from './logo/Beans_logo_dark.svg'

export default class CoffeeAbout extends Component {
    render () {
        
        const {item} = this.props;
        let title, picture;
        if (item === 'pleasure') {title = 'About our goods'; picture = PleasureCoffee} 
        else {title = 'About our beans'; picture = CoffeeGirl}

        return (
            <>
                <div className="row">
                    <div className="col-lg-4 offset-2">
                        <img className="shop__girl" src={picture} alt="girl"></img>
                    </div>
                    <div className="col-lg-4">
                        <div className="title">{title}</div>
                        <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                        <div className="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br></br>
                            <br></br>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            <br></br>
                            so questions. 
                            <br></br>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            <br></br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            <br></br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </>
        )
    }
}