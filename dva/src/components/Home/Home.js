import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import { routerRedux } from 'dva/router';
import './Home.less';

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			// password: ''
		};
	}

	componentDidMount() {
		// const _self = this;
    }
	toShare = () => {
		console.log(this.props,'props66')
		this.props.dispatch(routerRedux.push({ 
			pathname: '/Demo'
		}))
	}

	render() {
		// const {phoneAuthModalShow} = this.props;
		console.log(this.props,'this.props')
        let Home = 
        <div className="index">
            <div className="index-content">这是首页</div>
			<Button type="primary" onClick={this.toShare}>跳转</Button>
        </div>
		return Home;
	}
}

export default Home;
