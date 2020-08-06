import React, {Component } from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'; 

import './css/index.css'
import './css/display-results.css'

class DisplayCity extends Component {
    
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
                <div><p>Loading...</p></div>
            );
        }
        else {
            if (this.state.items.length == 0){
                return (
                    <div class="city-page">
                        <p data-aos="zoom-in" data-aos-duration="1200">city</p>
                        <h2 id="search-result-name" style={{ textTransform: 'uppercase'}}  data-aos="zoom-in" data-aos-duration="1200">{this.state.cityId}</h2>
                        <p data-aos="zoom-in" data-aos-duration="1200">Couldn't find the city you where searching for</p>
                        <Link to="/search-city" id="search-again" data-aos="zoom-in" data-aos-duration="1200"><p>search again</p></Link>
                    </div>
                );
            }
            else {
                return (
                    <div class="city-page">
                        <p id="search-type" data-aos="zoom-in" data-aos-duration="1200">population in</p>
                        <h2 style={{ textTransform: 'uppercase'}} id="search-result-name" data-aos="zoom-in" data-aos-duration="1200">{this.state.cityId}</h2>
                            <div className="result-field" data-aos="zoom-in" data-aos-duration="1200">
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
export default DisplayCity