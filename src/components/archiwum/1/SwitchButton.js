import React from 'react';

function SwitchButton(props) {
	return <button onClick={props.click}>{props.active ? 'Stop' : 'Start'}</button>;
}

export default SwitchButton;