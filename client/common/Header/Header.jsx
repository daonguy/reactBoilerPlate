import React, { PropTypes } from 'react'
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
