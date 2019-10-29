import React, { Component } from 'react';
import './Maps.scss'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class Maps extends Component {
  render() {
    console.log(this.props.location, 56346)
    return (
      <Map className='Map' center={{ lat: this.props.location[0].city.location.latitude, lng: this.props.location[0].city.location.longitude }} zoom={13} style={{ height: "100vh" }} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        />
        {this.props.location.map((marker, key) =>
          <Marker position={{ lat: marker.location.latitude, lng: marker.location.longitude }} key={key}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        )}

      </Map>
    )
  }
}

export default Maps;