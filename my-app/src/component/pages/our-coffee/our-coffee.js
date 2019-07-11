import React, {Component} from 'react';
import Banner from '../../banner';
import CoffeeAbout from '../../coffee-about';
import Filter from '../../filter';
import ItemList from '../../itemList';
import Footer from '../../footer';
import GotService from '../../../service/got-service';
import Spinner from '../../spinner';
import ErrorMessage from '../../error-message';
import {withRouter} from 'react-router-dom';

class OurCoffee extends Component {

    state = {
        itemList : null,
        loading : true,
        error : false,
        term : '',
        filter : 'all',
        selectedItem : null
    }

    gotService = new GotService();

    componentDidMount() {
        this.updateItem()
        
    }

    updateItem() {
        const {getData} = this.props;

        getData()
            .then(this.renderList)
            .catch(this.onError);
    }

    renderList = (itemList) => {
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

    searchPost(items, term) {
        if (term.length === 0) { 
            return items 
        } else { 
            return items.filter((item) => { 
                return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
            }) 
        }
    }

    filterPost(items, filter) {
        if (filter === 'Brazil') {
            return items.filter(item => item.country === filter);
        } else if (filter === 'Kenya') {
            return items.filter(item => item.country === filter);
        } else if (filter === 'Columbia') {
            return items.filter(item => item.country === filter);
        } else{
            return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {
        const {itemList, loading, error, term, filter} = this.state;
        const visibleLists = this.filterPost(this.searchPost(itemList, term), filter);


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const items = !(loading || error) ? <ItemList lists={visibleLists} 
                                                      getData={this.gotService.getCoffee} 
                                                      onItemSelected={(name) => this.props.history.push(`/beans/${name}`)}/> : null; 

        return (
            <>

                <Banner bg={'banner'}/>
                <section className="shop">
                    <div className="container">
                        <CoffeeAbout/>
                        <Filter onUpdateSearch={this.onUpdateSearch} onFilterSelect={this.onFilterSelect}/>
                        {errorMessage}
                        {spinner}
                        {items}
                    </div>
                </section>
                <Footer/>

            </>
        )
    }
}

export default withRouter(OurCoffee);