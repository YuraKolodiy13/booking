import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchCities} from "../../actions";
import Tabs from "../../components/Tabs/Tabs";
import Loader from "../../components/Loader/Loader";
import CitiesList from "../../components/CitiesList/CitiesList";
import './CitiesListPage.scss'
import Maps from "../../components/Maps/Maps";


class CitiesListPage extends Component{

  componentDidMount(){
    this.props.fetchCities();
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div>
        <Tabs/>
        <div className="listWrap">
          <div className="wrapper">
            <CitiesList cities={this.props.cities} currentCity={this.props.currentCity}/>
            <Maps location={this.props.location}/>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    cities: state.cities.cities,
    citiesInd: state.cities.citiesInd,
    currentCity: state.cities.currentCity,
    location: state.cities.location,
    loading: state.cities.loading
  }
}

const MapDispatchToProps = {
  fetchCities
};

export default connect(mapStateToProps, MapDispatchToProps)(CitiesListPage)