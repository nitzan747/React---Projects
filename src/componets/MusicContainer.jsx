import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MusicButton from './MusicButton.jsx';
import ExecuteButton from './ExecuteButton';
import AudioRecorder from './AudioRecorder';
import { ButtonGroup } from 'react-bootstrap';
import imagesArray from '../assets/images/pictureArray';
import './styles/musicContainer.css';

class MusicContainer extends React.Component {
	state = {
		executeButton: { buttonName: 'Play', isisPressedList: false },
		musicButtons: [
			{
				id: 0,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/zTJP0PAnmTvYUY6JJTzLE9jKmeUXLmTB'),
				chosenIcon: imagesArray[0]
			},
			{
				id: 1,
				buttonName: 'electric guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/d1k81iGmcKLEDlfmnoxLR95urp45zLlr'),
				chosenIcon: imagesArray[1]
			},
			{
				id: 2,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/IpdYPnvccUBLr7DfLt6IeBBoMTUxfecO'),
				chosenIcon: imagesArray[2]
			},
			{
				id: 3,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/SQeRFxNEie2q8UyxgsrIkrJko5VSxCDe'),
				chosenIcon: imagesArray[3]
			},
			{
				id: 4,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/tE6bLe8SmAHCvKl0NVHd6C4LBBSm8yo0'),
				chosenIcon: imagesArray[4]
			},
			{
				id: 5,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/GuqsS9pqHyroJKM87vFEzIruqGjrS8bm'),
				chosenIcon: imagesArray[5]
			},
			{
				id: 6,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/fmjFEMxNWLsHwJoYHogC7VbGQ15lEITE'),
				chosenIcon: imagesArray[6]
			},
			{
				id: 7,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/VgttZLMKoPKssL4GFhUEQAitEcuzXYS5'),
				chosenIcon: imagesArray[7]
			},
			{
				id: 8,
				buttonName: 'guitar',
				isPressed: false,
				sound: new Audio('https://audio.jukehost.co.uk/ZHZh9DMmWeAedThgYJErwBNYDwpotSQK'),
				chosenIcon: imagesArray[8]
			}
		]
	};

	playListIntervalId = -1;

	constructor(props) {
		super(props);
		this.handlePlayButton = this.handlePlayButton.bind(this);
		this.handleExecuteMusic = this.handleExecuteMusic.bind(this);
		this.StartMusic = this.StartMusic.bind(this);
		this.StopMusic = this.StopMusic.bind(this);
		this.PlayMusic = this.PlayMusic.bind(this);
	}

	handleExecuteMusic() {
		let newExecuteButtonInfo = this.state.executeButton;
		if (this.state.executeButton.isisPressedList === false) {
			newExecuteButtonInfo.isisPressedList = true;
			newExecuteButtonInfo.buttonName = 'Stop';
			this.StartMusic();
		} else {
			newExecuteButtonInfo.isisPressedList = false;
			newExecuteButtonInfo.buttonName = 'Play';
			this.StopMusic();
		}
		this.setState({ executeButton: newExecuteButtonInfo });
	}

	PlayMusic() {
		for (let i = 0; i < this.state.musicButtons.length; i++) {
			if (this.state.musicButtons[i].isPressed === true) {
				this.state.musicButtons[i].sound.play();
				this.state.musicButtons[i].sound.loop = true;
			} else {
				this.state.musicButtons[i].sound.pause();
				this.state.musicButtons[i].sound.currentTime = 0;
			}
		}
	}

	playAllPressedButtons() {}

	StartMusic() {
		this.PlayMusic(); //first round.
		this.playListIntervalId = setInterval(this.PlayMusic, 8000); //update pressed buttons every 8 seconds - loop
	}

	StopMusic() {
		clearInterval(this.playListIntervalId);

		for (let i = 0; i < this.state.musicButtons.length; i++) {
			//immediate pause of music
			this.state.musicButtons[i].sound.pause();
			this.state.musicButtons[i].sound.currentTime = 0;
		}

		this.setState({ musicButtons: this.state.musicButtons });
	}

	handlePlayButton(musicButton) {
		let id = this.state.musicButtons.indexOf(musicButton);
		let musicButtonsAfterPress = Array.from(this.state.musicButtons);
		//add chosen song to next loop list
		if (musicButtonsAfterPress[id].isPressed === false) {
			musicButtonsAfterPress[id].isPressed = true;
		} else {
			//remove chosen song from playing list
			musicButtonsAfterPress[id].sound.pause();
			this.state.musicButtons[id].sound.currentTime = 0;
			musicButtonsAfterPress[id].isPressed = false;
		}

		this.setState({ musicButtons: musicButtonsAfterPress });
	}

	checking() {}
	render() {
		return (
			<div className="screenContainer">
				<div className="musicContainer">
					<h3 class="titleStyling"> Welcome to the Music Machine! </h3>
					<ButtonGroup id="buttonsContainer">
						{this.state.musicButtons.map((button) => (
							<MusicButton
								musicButton={button}
								onClickMusicButton={this.handlePlayButton}
								key={button.id}
							/>
						))}
					</ButtonGroup>
				</div>
				<div className="playAndRecord">
					<ExecuteButton button={this.state.executeButton} onClickExecuteButton={this.handleExecuteMusic} />
					<AudioRecorder />
				</div>
			</div>
		);
	}
}

export default MusicContainer;
