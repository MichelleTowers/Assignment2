import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className={`banner-banner ${props.rootClassName} `}>
      <Link to="/" className="banner-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="banner-traqstarz"
        />
      </Link>
    </div>
  )
}

Banner.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/traqstarz%20%5B3%5D-300h.png',
  rootClassName: '',
}

Banner.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
