import React, {Component } from 'react';
import { Link } from 'react-router-dom'

class Country extends Component {
    
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id: this.props.match.params.countryId
        }
        
        console.log(this.state.id)
 
    }

    render(){
        return (
            <div class="homePage">            
                {this.state.id}
            </div>
        )
    }
}
export default Country