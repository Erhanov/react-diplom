import React, {Component} from 'react';
import ItemBeans from '../itemBeans';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';

export default class ItemList extends Component {

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
        const {lists, page} = this.props;

        let errorMessage, spinner, items;

        if (page === 'pleasure') {
            errorMessage = error ? <ErrorMessage/> : null;
            spinner = loading ? <Spinner/> : null
            items = !(loading || error) ? <ItemBeans itemList={itemList} page={'coffee'}/> : null; 
        } else {
            errorMessage = error ? <ErrorMessage/> : null;
            spinner = loading ? <Spinner/> : null
            items = !(loading || error) ? <ItemBeans itemList={lists} page={'coffee'}/> : null; 
        }

        

        return (
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {errorMessage}
                        {spinner}
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}