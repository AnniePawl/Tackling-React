import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Campsite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Camper />;
	}
}

const Camper = (props) => {
	return (
		<div>
			<h1>List of Campers</h1>
			<p>Name: {props.name}</p>
		</div>
	);
};

Camper.defaultProps = {
	name: 'Johnny Jingles'
};

Camper.propTypes = { name: PropTypes.string.isRequired };

export default Campsite;
