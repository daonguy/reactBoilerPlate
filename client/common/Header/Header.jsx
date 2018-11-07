import React from 'react'
import PropTypes from 'prop-types';
import styles from './Header.css'

const Header = ({
  title
}) => {
  return (
    <div className={styles.header}>
          <span><b>{title}</b></span>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

module.exports = Header
