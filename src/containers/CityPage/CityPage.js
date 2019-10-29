import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchCity, fetchReviews} from "../../actions";
import Loader from "../../components/Loader/Loader";
import City from "../../components/City/City";

class CityPage extends Component{

  componentDidMount(){
    this.props.fetchCity(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
    console.log(this.props)
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='wrapper'>
        <City city={this.props.city} reviews={this.props.reviews} location={this.props.city}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    city: state.cities.city,
    reviews: state.cities.reviews,
    location: state.cities.location,
    loading: state.cities.loading
  }
}

const MapDispatchToProps = {
  fetchCity: id => fetchCity(id),
  fetchReviews: id => fetchReviews(id),
};

export default connect(mapStateToProps, MapDispatchToProps)(CityPage)