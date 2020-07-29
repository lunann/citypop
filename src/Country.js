import React, {Component } from 'react';
import { Link } from 'react-router-dom'

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
        fetch('http://api.geonames.org/search?name_equals=' + this.state.countryId + '&type=json&username=weknowit')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
        })
        {console.log("state 1", this.state)}
    }

    render(){
        var { isLoaded, items } = this.state;
        
        {console.log("state 2", this.state)}
        if (!isLoaded){
            return (
                <div>Loading...</div>
            );
        }
        else {
            if (this.state.items.length == 0){
                return (
                    <div>
                        {this.state.cityId}
                        <p>Hittar inte staden</p>
                    </div>
                );
            }
            else {
                return (
                    <div class="homePage">            
                        {this.state.countryId}
                        <MainContent countryCode={this.state.items.geonames[0].countryCode}/>

                    </div>
                )
            }
        }
    }
}
export default Country