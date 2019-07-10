import React, {Component} from 'react';
import BeansLogoDark from './logo/Beans_logo_dark.svg';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import GotService from '../../service/got-service';

export default class Banner extends Component {

    gotService = new GotService();

    state = {
        itemList : null,
        loading : true,
        error : false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {coffeeName, getData} = this.props;
        if (!coffeeName) {
            return;
        } 

        this.setState({ loading : true });

        getData()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoaded = (itemList) => {
        this.setState({
            itemList,
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

        const View = ({char}) => {
            
            const {name, country, url, description, price} = char;

            return (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 offset-1">
                                <img className="shop__girl" src={url} alt="coffee_item"></img>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it {name}</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                <div className="shop__point">
                                    <span>Country:</span>
                                    {country}
                                </div>
                                <div className="shop__point">
                                    <span>Description:</span>
                                    {description}
                                </div>
                                <div className="shop__point">
                                    <span>Price:</span>
                                    <span className="shop__point-price">{price}$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        const {itemList, loading, error} = this.state;
        const {coffeeName} = this.props;
        
        let filtered;
        if(itemList) {
            filtered = itemList.filter(item => {
                return item.name === coffeeName
            });
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={filtered[0]}/> : null; 

        return (
            <section className="shop">
                {errorMessage}
                {spinner}
                {content}
            </section>
        )
    }
}