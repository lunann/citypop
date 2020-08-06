import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './css/search.css'

class SearchCountry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }

    render(){
        return (
            <div class="searchPage">
                <p data-aos="zoom-in" data-aos-duration="1200">search country to find out cities with highest population</p>
                <h2 data-aos="zoom-in" data-aos-duration="1200">Search by country</h2>
                <div className="input-field" data-aos="zoom-in" data-aos-duration="1200">
                    <input type="text" placeholder="enter country here" value={this.state.value} onChange={this.handleChange} />
                    <Link to={"/search-country/"+this.state.value}><input type="submit" value="search"/></Link>
                </div>
            </div>
        )
    }
}
export default SearchCountry