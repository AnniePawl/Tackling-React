import React from 'react';
import './Counters.scss';
import IncrementDecrementReset from './incrementDecrementReset'


function Counters() {
	return (
		<div className='counters__container'>
			<h1>Classic Counter</h1>
			<IncrementDecrementReset/>
		</div>
	);
}
export default Counters;
