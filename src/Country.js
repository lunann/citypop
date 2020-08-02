import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './display-results.css'
import './index.css'

import MainContent from './MainContent'

class Country extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            countryId: this.props.match.params.countryId,
            countryCode: '', 
        }
 
    }
    componentDidMount() {
        fetch('http://api.geonames.org/search?name_equals=' + this.state.countryId + '&q=PCLI&type=json&username=weknowit')
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
                        <p data-aos="zoom-in" data-aos-duration="1200">country</p>
                        <h2 style={{ textTransform: 'uppercase'}} id="search-result-name" data-aos="zoom-in" data-aos-duration="1200">{this.state.countryId}</h2>
                        <p data-aos="zoom-in" data-aos-duration="1200">Couldn't find the country you where searching for</p>
                        <Link to="/search-country"><p data-aos="zoom-in" data-aos-duration="1200">search again</p></Link>
                    </div>
                );
            }
            else {
                return (
                    <div class="homePage"> 
                        <p id="search-type" data-aos="zoom-in" data-aos-duration="1200">top three populated cities in</p>
                        <h2 id="search-result-name" style={{ textTransform: 'uppercase'}} data-aos="zoom-in" data-aos-duration="1200">{this.state.countryId}</h2>
                        <MainContent countryCode={this.state.items[0].countryCode}/>  
                    </div>
                )
            }
        }
    }
}
export default Country