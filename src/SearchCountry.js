import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './search.css'

class SearchCountry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <div class="homePage">            
                <h2>Search by country</h2>
                <div className="input-field">
                    <input type="text" placeholder="enter country here" value={this.state.value} onChange={this.handleChange} />
                    <Link to={"/search-country/"+this.state.value}><input type="submit" value="search"/></Link>
                </div>
            </div>
        )
    }
}
export default SearchCountry