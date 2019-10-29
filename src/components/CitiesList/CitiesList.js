import React from 'react'
import './CitiesList.scss'
import {Link} from "react-router-dom";

const CitiesList = props => {
  return (
    <div className='citiesList'>
      <h2>{props.cities.filter(item => item.city.name === props.currentCity).length} places to stay in {props.currentCity}</h2>
      <div className='citiesList__items'>
        {props.cities.map((item, key) => item.city.name === props.currentCity
          ? <div key={key} className='citiesList__item'>
            <div className="citiesList__img" style={{backgroundImage: `url(${item.preview_image})`}}></div>
            <div className="citiesList__info">
              <div className="citiesList__price">€{item.price}<span>/night</span></div>
              <div className="citiesList__rate">{item.rating}</div>
              <h5>
                <Link to={`/city/${item.id}`}>{item.title}</Link>
              </h5>
              <p>{item.type}</p>
            </div>
            </div>
          : null
        )}
      </div>
    </div>
  )
}

export default CitiesList;