import React, { Component } from 'react'

export class Navbar extends Component {
  render(props) {
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/"><strong>NFT Marketplace</strong></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
            </div>
            <small className='text-white mx-3 px-2'>
            {this.props.account}
            </small>
        </nav>
    </div>
    
    )
  }
}

export default Navbar