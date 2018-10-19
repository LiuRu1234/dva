import React from 'react';
import { connect } from 'dva';
import Demo from '../components/Demo/Demo';

function DemoContainer(props) {
  return  <Demo {...props}/>;
}

function mapStateToProps(state) {
  return {
    // ...state.user,
    // ...state.global,
  };
}

export default connect(mapStateToProps)(DemoContainer);
