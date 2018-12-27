import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    // Navbar name
    const { branding } = this.props;

    // Navbar toggle styles
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <nav
        className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-primary fixed-top sticky"
        id="cvNavbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="cvNavbarBrand">
            {branding}
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul
              className="navbar-nav"
              id="cvNavItems"
              onClick={this.toggleNavbar}
            >
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#basicInfo">
                  Basic Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#experienceSection">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#educationSection">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Licenses and Certifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Play a game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  branding: 'My App'
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Navbar;
