import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footer.css'

class Footer extends Component {
	render() {
		return (
			<div className="tab-container">
				<div>one</div>
				<div>two</div>
				<div>three</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tab: state.activeTab
	};
}

export default connect(mapStateToProps)(Footer);
