import React from 'react'

import PropTypes from 'prop-types'

import Navbar from './navbar'
import './mainpageheader.css'

const Mainpageheader = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`mainpageheader-header ${props.rootClassName} `}
    >
      <div className="mainpageheader-container">
        <nav className="mainpageheader-nav">
          <Navbar></Navbar>
        </nav>
      </div>
    </header>
  )
}

Mainpageheader.defaultProps = {
  rootClassName: '',
}

Mainpageheader.propTypes = {
  rootClassName: PropTypes.string,
}

export default Mainpageheader
