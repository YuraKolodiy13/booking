import React, {Fragment} from 'react'
import './City.scss'
// import Maps from "../Maps/Maps";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const City = props => {
  console.log(props.city, 5435)
  return(
    <div className='City'>
      {Object.keys(props.city).length
      ? <Fragment>
        <div className="city__imgs">
          {props.city.images.slice(0, 6).map((item, key) =>
            <div key={key} className='city__img' style={{backgroundImage: `url(${item})`}} />
          )}
        </div>
        <div className="city__wrapper">
          <h1 className="city__name">{props.city.title}</h1>
          <div className="city__price">€{props.city.price}/night</div>
          <div className="city__inside">
            <h2>What's inside</h2>
            <ul>
              {props.city.goods.map((item, key) =>
                <li key={key}>{item}</li>
              )}
            </ul>
          </div>
          <div className="city__host host">
            <h2>Meet the host</h2>
            <div className={`host__img ${props.city.host.is_pro ? 'pro' : ''}`} style={{backgroundImage: `url(/${props.city.host.avatar_url})`}}/>
            <h5>{props.city.host.name}</h5>
            {props.city.host.is_pro ? <span>Pro</span> : null}
            <p>{props.city.description}</p>
          </div>

          <div className="city__reviews reviews">
            <h2>Rewies - {Object.keys(props.reviews).length}</h2>
            {props.reviews.map((item, key) =>
              <div key={key} className="reviews__item">
                <div className="reviews__img">
                  <img src={item.user.avatar_url} alt=""/>
                  <span>{item.user.name}</span>
                </div>
                <div className="reviews__info">
                  <p>{item.comment}</p>
                  {/*{const date = }*/}
                  <span>{new Date(item.date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</span>
                </div>
              </div>
            )}
          </div>
          <Map className='Map' center={{ lat: props.city.location.latitude, lng: props.city.location.longitude }} zoom={13} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
            />
            <Marker position={{ lat: props.city.location.latitude, lng: props.city.location.longitude }}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
        </Fragment>
      : null
      }
    </div>
  )
};

export default City