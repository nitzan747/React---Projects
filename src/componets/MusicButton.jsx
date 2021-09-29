import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/musicButton.css';

class MusicButton extends React.Component {
	state = {
		isButtonPressed: false
	};

	buttonStyle = {
		backgroundImage: this.props.musicButton.chosenIcon,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};

	HandleClick() {
		this.props.onClickMusicButton(this.props.musicButton);
		this.setState({ isButtonPressed: !this.state.isButtonPressed });
	}

	styleByState() {
		if (this.state.isButtonPressed === true) {
			return { border: '5px solid red' };
		} else {
			return { border: '1px solid black' };
		}
	}

	render() {
		return (
			<button style={this.styleByState()} className="music-button" onClick={() => this.HandleClick()}>
				<img
					className="button-image"
					src={this.props.musicButton.chosenIcon}
					alt={this.props.musicButton.buttonName}
				/>
			</button>
		);
	}
}

export default MusicButton;
