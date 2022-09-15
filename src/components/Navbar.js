import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render(props) {
    return (
      <div className='nav2'>
        <nav className="navbar navbar-expand-lg " id='navbar'>
          <div className="nav1 container-fluid ">
            <p className="navbar-brand text-light" style={{margin: '5px'}} href="/">
              <strong>NFT Marketplace</strong>
            </p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/mint"
                >
                  <strong>Mint</strong>
                </Link>
              </li>
            </ul>
          </div>
          <small className="text-light mx-3 px-2"><strong>{this.props.account}</strong></small>
        </nav>
      </div>
    )
  }
}

export default Navbar
