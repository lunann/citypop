import React, {Component } from 'react';
import { Link } from 'react-router-dom'

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
        
        {console.log("state ", this.state)}
        
        var { isLoaded, items } = this.state;
        
        const myData = this.state;
        
        {console.log("myData", myData)}
        
        {console.log(myData.items.geonames)}
        
        
        if (!isLoaded){
            return (
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div class="homePage">
                   
                    
                    
                    <Link to={"/search-city/" + this.state.items[0].name}>{this.state.items[0].name}</Link><br></br>
                    <Link to={"/search-city/" + this.state.items[1].name}>{this.state.items[1].name}</Link><br></br>
                    <Link to={"/search-city/" + this.state.items[2].name}>{this.state.items[2].name}</Link><br></br>
                    {console.log(this.state)}


                </div>
            )
        }
    }
}
export default MainContent

//.sort((a,b) => b.population - a.population)