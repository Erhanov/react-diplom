import React, {Component} from 'react';
import ItemBeans from '../itemBeans';
import GotService from '../../service';
import ErrorMessage from '../error-message';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        item : null,
        loading : true,
        error : false
    }

    componentDidMount() {
        this.updateChar();
    }

    updateChar() {
        const {getData} = this.props;

        this.setState({ loading : true })

        getData()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoaded = (item) => {
        this.setState({
            item,
            loading : false
        })
    }

    onError = () => {
        this.setState({
            error : true,
            loading : false
        })
    }

    render () {

        const View = (item) => {
            return (
                <>
                    <ul className="list-group list-group-flush">
                        {
                            item.map(() => {
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
                            })
                        }
                    </ul>
                </>
            )
        }

        const {item, loading, error} = this.state;
        console.log(item);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View item={item}/> : null; 

        return (
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}