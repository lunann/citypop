import React, {Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

import MainContent from "./MainContent"
import SearchCity from "./SearchCity"
import SearchCountry from "./SearchCountry"
import City from "./City"
import Country from "./Country"

import './fonts.css'
import './App.css'

//Population land
//http://api.geonames.org/search?name_equals=france&type=json&username=weknowit
//Population städer länder
//http://api.geonames.org/search?country=FR&type=json&username=weknowit

function App () {
    return (
        <Router>
            <div className="App">
                <Link to="/"><h1>Citypop</h1></Link>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search-city" component={SearchCity}/>
                    <Route exact path="/search-country" component={SearchCountry}/>
                    <Route path="/search-city/:cityId" component={City}/>
                    <Route path="/search-country/:countryId" component={Country}/>                
                </Switch>
            </div>
        </Router>
    );   
}

const Home = () => (
    <div className="home">
        <Link className="hyperlinks-nav" id="search-city" to='/search-city'>
                <p>Search by city</p></Link>
        <Link className="hyperlinks-nav" id="search-country" to='/search-country'>
                <p>Search by country</p></Link>
    </div>
);

export default App;
