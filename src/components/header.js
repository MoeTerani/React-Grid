import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlescroll)
  }

  handlescroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
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
  }
}

export default Header
