import React, {Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import MainContent from "./MainContent"
import SearchCity from "./SearchCity"
import SearchCountry from "./SearchCountry"

//Population land
//http://api.geonames.org/search?name_equals=france&type=json&username=weknowit
//Population städer länder
//http://api.geonames.org/search?country=FR&type=json&username=weknowit

class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        fetch('http://api.geonames.org/search?name_equals=france&type=json&username=weknowit')
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
                <Router>
                    <div className="App">
                        Citypop
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/SearchCity" component={SearchCity}/>
                            <Route exact path="/SearchCountry" component={SearchCountry}/>
                        </Switch>
                    </div>
                </Router>
            );
        }
    }
}

const Home = () => (
    <div>
        test
    </div>
);

export default App;
