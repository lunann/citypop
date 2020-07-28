import React, {Component } from 'react';
import { Link } from 'react-router-dom'

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
                Search by city
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <Link to={"/search-country/"+this.state.value}><input type="submit" value="Submit"/></Link>
            </div>
        )
    }
}
export default SearchCity