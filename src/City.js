import React, {Component } from 'react';
import { Link } from 'react-router-dom'

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
        fetch('http://api.geonames.org/search?name_equals=' + this.state.cityId + '&type=json&username=weknowit')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
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
            return (
                <div class="homePage">            
                    {this.state.cityId}
                    <br></br>
                    {this.state.items.geonames[0].population}       
                </div>
            )
        }
        
    }
}
export default City