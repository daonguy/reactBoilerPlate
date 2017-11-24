import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../actions'
import Header from '../../common/Header/Header'

import styles from './HomeApp.css'


class HomeApp extends Component {

	constructor(props) {
    	super(props)
  	}

  render = () => {
	    return (
	      <div className={styles.body}>
          <Header title="Dashboard"/>
          <div className={styles.welcome}>WELCOME to Dao React UI boiler Plate</div>
	      </div>
	    );
  }
}

function mapStateToProps(state) {
  // map state (from reducers) to props for the React app.
  // usually this is 1-to-1.
  const { data, isLoading } = state
  return {
    data,
    isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp)