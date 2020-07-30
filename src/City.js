import React, {Component } from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'; 

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
                        <p>city</p>
                        <h2 style={{ textTransform: 'uppercase'}}>{this.state.cityId}</h2>
                        <p>Hittar inte staden</p>
                    </div>
                );
            }
            else {
                return (
                    <div class="city-page">
                        <p id="search-type">population in</p>
                        <h2 style={{ textTransform: 'uppercase'}} id="search-result-name">{this.state.cityId}</h2>
                            <div className="result-field">
                                <div className="population-info">
                                    <h3><NumberFormat value={this.state.items[0].population} displayType={'text'} thousandSeparator={true}/></h3>
                                </div>
                            </div>
                    </div>
                )
            }
        }
        
    }
}
export default City