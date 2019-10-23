import React, {Component} from 'react'
import logo from './logo.svg'
import './Header.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component{
  render(){
    let route = this.props.auth ? '/favourites' : '/login';
    return (
      <header className='header'>
        <div className="header__wrapper wrapper">
          <div className="header__logo">
            <Link to={'/'}>
              <img src={logo} alt=""/>
            </Link>
          </div>
          <div className="header__user">
            <Link to={route}>
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}
const mapStateToProps = state => {
  return{
    auth: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Header);