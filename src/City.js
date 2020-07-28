import React, {Component } from 'react';
import { Link } from 'react-router-dom'

class City extends Component {
    
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id: this.props.match.params.cityId
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
export default City