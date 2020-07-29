import React, {Component } from 'react';
import { Link } from 'react-router-dom'

import './display-results.css'

class MainContent extends Component {
    
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
                <div>Loading...</div>
            );
        }
        else {
            if (this.state.items.length == 0){
                return (
                    <div>
                        <h2>{this.state.value}</h2>
                        <p>Hittar inte landet</p>
                    </div>
                );
            }
            else {
                return (
                    <div class="wrapper">
                        <div className="top-three-cities-population">
                            <Link to={"/search-city/" + this.state.items[0].name} className="city">{this.state.items[0].name}</Link>
                            <Link to={"/search-city/" + this.state.items[1].name} className="city">{this.state.items[1].name}</Link>
                            <Link to={"/search-city/" + this.state.items[2].name} className="city" id="last-city">{this.state.items[2].name}</Link>
                            {console.log(this.state)}
                        </div>
                    </div>
                )
            }
        }
    }
}
export default MainContent

//.sort((a,b) => b.population - a.population)