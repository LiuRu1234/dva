import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import { routerRedux } from 'dva/router';
import './Demo.less'

class Demo extends PureComponent {
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
			pathname: '/'
		}))
	}

	render() {
		// const {phoneAuthModalShow} = this.props;
        let demo = 
        <div className="demo">
            <div className="demo-content">这个是demo</div>
			<Button type="primary" onClick={this.toShare}>返回</Button>
        </div>
		return demo;
	}
}

export default Demo;
