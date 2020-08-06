import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './css/display-results.css'

class Countries extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            countryCode: this.props.countryCode,  
        }
    }
    componentDidMount() {
        fetch('http://api.geonames.org/search?country=' + this.state.countryCode + '&cities=cities15000&orderby=population&type=json&username=weknowit')
            .then(result => result.json())
            .then((data) => {
                console.log("data",data.geonames)
                this.setState({
                    isLoaded: true,
                    items: data.geonames
                })
            })
    }

    render () {
                
        var { isLoaded, items } = this.state;
        
        if (!isLoaded){
            return (
                <div><p>Loading...</p></div>
            );
        }
        else {
            return (
                <div className="countries-wrapper-box">
                    <Link to={"/search-city/" + this.state.items[0].name} className="city-link" id="city-1" data-aos-delay="3000" data-aos="fade-right" data-aos-duration="3000"><p>{this.state.items[0].name}</p></Link>
                    <Link to={"/search-city/" + this.state.items[1].name} className="city-link" id="city-2" data-aos="fade-left" data-aos-duration="3000"><p>{this.state.items[1].name}</p></Link>
                    <Link to={"/search-city/" + this.state.items[2].name} className="city-link" id="city-3" data-aos="fade-right" data-aos-duration="3000"><p>{this.state.items[2].name}</p></Link>
                </div>
            )    
        }
    }
}
export default Countries