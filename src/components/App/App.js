import React, {Component} from 'react';
import './App.scss';
import {Route, Switch} from "react-router";

import CitiesListPage from "../../containers/CitiesListPage/CitiesListPage";
import Header from "../../components/Header/Header";
import Favourites from "../../containers/Favourites/Favourites";
import Auth from "../../containers/Auth/Auth";
import {connect} from "react-redux";
import CityPage from "../../containers/CityPage/CityPage";

 class App extends Component{
  render(){

    let routs = (
      <Switch>
        <Route path='/' component={CitiesListPage} exact/>
        <Route path='/city/:id' component={CityPage}/>
        <Route path='/login' component={Auth}/>
      </Switch>
    );
    if(this.props.auth){
      routs = (
        <Switch>
          <Route path='/' component={CitiesListPage} exact/>
          <Route path='/city:id' component={CityPage}/>
          <Route path='/favourites' component={Favourites}/>
        </Switch>
      )
    }

    return (
      <div className="App">
        <Header/>
        {routs}
      </div>
    );
  }
}

const mapStateToProps = state => {
   return{
     auth: !!state.auth.token
   }
}

export default connect(mapStateToProps)(App);
