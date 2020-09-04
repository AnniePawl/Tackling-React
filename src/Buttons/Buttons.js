import React from 'react';
import BasicButton from './BasicButton';
import ClassicCounter from '../Counters/ClassicCounter';
import BindCounter from '../Counters/counter_w_bind';
import ES6Counter from '../Counters/counter_wo_bind';

function Buttons() {
	return (
		<div>
			<h1>Simple Buttons</h1>
			<BasicButton />
			<h3>Classic Counter</h3>
			<ClassicCounter />
			<h3>Counter Using 'Bind'</h3>
			<BindCounter />
			<h3>Counter w/0 'Bind / ES6 Counter</h3>
			<ES6Counter />
		</div>
	);
}

export default Buttons;
