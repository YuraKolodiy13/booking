import React, {Component} from 'react'
import './Tabs.scss'
import {connect} from "react-redux";
import {changeCurrentCity} from "../../actions";

class Tabs extends Component{

  render(){
    return(
      <div className='wrapper'>
        <ul className='tabs'>
          {this.props.citiesInd.map((item, key) =>
            <li key={key} onClick={(e) => this.props.changeCurrentCity(e.target.innerHTML)} className={this.props.currentCity === item ? 'active' : ''}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    cities: state.cities.cities,
    currentCity: state.cities.currentCity,
    citiesInd: state.cities.citiesInd
  }
}

const mapDispatchToProps = {
  changeCurrentCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)