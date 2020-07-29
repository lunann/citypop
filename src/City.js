import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './display-results.css'

class City extends Component {
    
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            items: [],
            isLoaded: false,
            cityId: this.props.match.params.cityId
        }
        
        console.log(this.state.cityId)
 
    }
    componentDidMount() {
        fetch('http://api.geonames.org/search?name_equals=' + this.state.cityId + '&cities=cities1000&orderby=population&type=json&username=weknowit')
            .then(result => result.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    items: data.geonames,
                })
        })
    }

    render(){
        var { isLoaded, items } = this.state;

        
        if (!isLoaded){
            return (
                <div>Loading...</div>
            );
        }
        else {
            if (this.state.items.length == 0){
                return (
                    <div>
                        <h2>{this.state.cityId}</h2>
                        <p>Hittar inte staden</p>
                    </div>
                );
            }
            else {
                return (
                    <div class="city-page">            
                        <h2>{this.state.cityId}</h2>
                        <br></br>
                        <div className="population-info">
                            <h3>Population</h3>
                            <p>{this.state.items[0].population}</p>
                        </div>
                    </div>
                )
            }
        }
        
    }
}
export default City