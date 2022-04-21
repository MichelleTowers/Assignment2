import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-nav ${props.rootClassName} `}>
      <div className="navbar-container">
        <Link to="/about-us" className="navbar-about">
          {props.About}
        </Link>
        <Link to="/team-profile" className="navbar-team-profile">
          {props.IT - Technology1}
        </Link>
        <Link to="/ideal-jobs" className="navbar-ideal-jobs">
          {props.IT - Technology2}
        </Link>
        <Link to="/tools" className="navbar-tools">
          {props.Interview1}
        </Link>
        <Link to="/industry-data" className="navbar-industry-data">
          {props.Interview11}
        </Link>
        <Link to="/i-t-technologies" className="navbar-i-t-technology">
          {props.IT - Technology}
        </Link>
        <Link to="/i-t-interview" className="navbar-interview">
          {props.Interview}
        </Link>
        <Link to="/our-project" className="navbar-project">
          {props.Project}
        </Link>
        <Link to="/reflections" className="navbar-reflections">
          {props.References1}
        </Link>
        <Link to="/references" className="navbar-references">
          {props.References}
        </Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Interview11: 'Industry Data',
  References: 'References',
  'IT-Technology': 'IT Technology',
  rootClassName: '',
  Project: 'Project',
  Interview: 'Interview',
  About: 'About',
  References1: 'Reflections',
  'IT-Technology2': 'Ideal Jobs',
  Interview1: 'Tools',
  'IT-Technology1': 'Team Profile',
}

Navbar.propTypes = {
  Interview11: PropTypes.string,
  References: PropTypes.string,
  'IT-Technology': PropTypes.string,
  rootClassName: PropTypes.string,
  Project: PropTypes.string,
  Interview: PropTypes.string,
  About: PropTypes.string,
  References1: PropTypes.string,
  'IT-Technology2': PropTypes.string,
  Interview1: PropTypes.string,
  'IT-Technology1': PropTypes.string,
}

export default Navbar
