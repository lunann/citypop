import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './css/search.css'

class SearchCity extends Component {
    
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
                <p data-aos="zoom-in" data-aos-duration="1200">search city to find out population</p>
                <h2 data-aos="zoom-in" data-aos-duration="1200">Search by city</h2>
                <div className="input-field" data-aos="zoom-in" data-aos-duration="1200">
                    <input type="text" placeholder="enter city here" value={this.state.value} onChange={this.handleChange}/>
                    <Link to={"/search-city/"+this.state.value}><input type="submit" value="search"/></Link>
                </div>
            </div>
        )
    }
}
export default SearchCity