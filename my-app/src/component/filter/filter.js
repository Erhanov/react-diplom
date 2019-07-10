import React, {Component} from 'react';

export default class Filter extends Component {

    state = {
        term : '',
        buttons : [
            {country : 'All', label : 'All'},
            {country : 'Brazil', label : 'Brazil'},
            {country : 'Kenya', label : 'Kenya'},
            {country : 'Columbia', label : 'Columbia'}
        ]
    }
    
    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {

        const buttons = this.state.buttons.map(({country, label}) => {
            const active = this.props.filter === country;
            const clazz = active ? 'shop__filter-btn' : 'shop__filter-btn' 
            return (
                <button 
                    key={country} 
                    className={`${clazz}`}
                    onClick={() => this.props.onFilterSelect(country)}>{label}</button>
            )
        })

        return (
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input onChange={this.onUpdateSearch} id="filter" type="text" placeholder="start typing here..." className="shop__search-input"></input>
                    </form>
                </div>
                <div className="col-lg-5">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}