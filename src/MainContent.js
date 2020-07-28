import React, {Component } from 'react';

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
        fetch('http://api.geonames.org/search?country=' + this.state.countryCode + '&type=json&username=weknowit')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
        })
    }
    render () {
        
        var { isLoaded, items } = this.state;
        
        {console.log("state ", this.state)}
        if (!isLoaded){
            return (
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div class="homePage">            
                    {this.state.items.geonames[0].name}<br></br>
                    {this.state.items.geonames[1].name}<br></br>
                    {this.state.items.geonames[2].name}<br></br>
                    {console.log(this.state)}


                </div>
            )
        }
    }
}
export default MainContent