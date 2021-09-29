import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const ExecuteButton = (props) => {
	return (
		<Button style={{ margin: 5 }} onClick={() => props.onClickExecuteButton()}>
			{props.button.buttonName}
		</Button>
	);
};

export default ExecuteButton;
