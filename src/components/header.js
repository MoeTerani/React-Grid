import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require('../images/logo-designcode.svg')} width="30" />
      </Link>
      <Link to="/courses" className="Header--item">
        Courses
      </Link>
      <Link to="/downloads" className="Header--item">
        Downloads
      </Link>
      <Link to="/workshops" className="Header--item">
        Workshops
      </Link>
      <Link to="/Buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
