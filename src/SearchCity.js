import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './search.css'

class SearchCity extends Component {
    
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
                <h2>Search by city</h2>
                <input type="text" placeholder="enter city here" value={this.state.value} onChange={this.handleChange} />
                <Link to={"/search-city/"+this.state.value}><input type="submit" value="search"/></Link>
            </div>
        )
    }
}
export default SearchCity