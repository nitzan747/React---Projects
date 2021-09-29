import * as React from 'react';
import useRecorder from '../useRecorder';
import Button from 'react-bootstrap/Button';
import './styles/audioRecorder.css';

function AudioRecorder() {
	let [ audioURL, isRecording, startRecording, stopRecording ] = useRecorder();
	return (
		<div className="AudioRecorder">
			<audio src={audioURL} controls />
			<Button onClick={startRecording} variant="outline-success" disabled={isRecording}>
				Record
			</Button>
			<Button onClick={stopRecording} variant="outline-danger" disabled={!isRecording}>
				Stop
			</Button>
		</div>
	);
}

export default AudioRecorder;
