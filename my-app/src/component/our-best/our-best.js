import React, {Component} from 'react';
import ErrorMessage from '../error-message';
import Spinner from '../spinner';
import ItemBeans from '../itemBeans';

export default class OurBest extends Component {

    state = {
        itemList : null,
        loading : true,
        error : false
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const {getData} = this.props;

        getData()
                .then(this.renderItem)
                .catch(this.onError);
    }

    renderItem = (itemList) => {
        this.setState({
            itemList,
            loading : false
        })
    }

    onError = () => {
        this.setState({
            loading : false,
            error : true
        })
    }

    render () {
        const {itemList, loading, error} = this.state;
        const {onItemSelected} = this.props;


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const items = !(loading || error) ? <ItemBeans onItemSelected={(name) => onItemSelected(name)} itemList={itemList} page={'best'}/> : null; 
        return (
            <section className="best">
                <div className="container">
                    <div className="title">Our best</div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {errorMessage}
                            {spinner}
                            {items}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}