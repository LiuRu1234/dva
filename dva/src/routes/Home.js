import React from 'react';
import { connect } from 'dva';
import Home from '../components/Home/Home';

function HomeContainer(props) {
  return  <Home {...props}/>;
}

function mapStateToProps(state) {
  return {
    ...state.home
    // ...state.global,
  };
}

export default connect(mapStateToProps)(HomeContainer);
