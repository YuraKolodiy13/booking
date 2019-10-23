import React from 'react'
import './CitiesList.scss'

const CitiesList = props => {
  return (
    <div className='citiesList'>
      <div className='citiesList__items'>
        {props.cities.map((item, key) => item.city.name === props.currentCity
          ? <div key={key} className='citiesList__item'>
            <div className="citiesList__img" style={{backgroundImage: `url(${item.preview_image})`}}></div>
            <div className="citiesList__info">
              <div className="citiesList__price">€{item.price}/night</div>
              <div className="citiesList__rate">{item.rating}</div>
              <h5>{item.title}</h5>
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