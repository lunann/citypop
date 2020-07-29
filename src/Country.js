import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './display-results.css'

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
                        <h2>{this.state.countryId}</h2>
                        <p>Hittar inte landet</p>
                    </div>
                );
            }
            else {
                return (
                    <div class="homePage">            
                        <h2>{this.state.countryId}</h2>
                        <MainContent countryCode={this.state.items[0].countryCode}/>

                    </div>
                )
            }
        }
    }
}
export default Country