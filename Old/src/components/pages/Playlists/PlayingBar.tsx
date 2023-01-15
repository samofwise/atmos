import React from "react";
import Device from '@material-ui/icons/Devices'
import Refresh from '@material-ui/icons/Refresh'
import Spotify from "src/core/Spotify";
import { ThunkDispatch } from "src/core/Redux/Thunk";
import { loadPlayingState, setActiveDevice } from "src/core/Redux/Actions/PlayingActions";
import { connect } from "react-redux";
import { IState } from "src/core/Redux/State";
import PlayingControls from "./PlayingControls";

const mapStateToProps = (state: IState) => ({
	currentDevice: state.playing.device,
	devices: state.playing.devices,
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
	loadPlayingState: () => dispatch(loadPlayingState()),
	setActiveDevice: (device: SpotifyApi.UserDevice) => dispatch(setActiveDevice(device))
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

interface State {
	showDevices: boolean;
}

class PlayingBar extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = { showDevices: false };
	}

	async componentWillMount() {
		await Spotify.initialise();
		await this.props.loadPlayingState();
	}

	onClickDevices = () => 
		this.setState(prev => ({ showDevices: !prev.showDevices }));
	

	getCurrentDeviceName = () => {
		return this.props.currentDevice && this.props.currentDevice.name || 'Not Selected'
	}

	getDevices = () => {
		const devices = this.props.devices;
		if (devices && devices.length)
			return devices.map((d, i) => <article className="item" key={i} onClick={() => this.props.setActiveDevice(d)}>{d.name}</article>)
		else
			return (<article>No Devices Online</article>)
	}

	devicesPopup = () => {
		if (this.state.showDevices)
			return (
				<section className="devices">
					<h3>Devices<Refresh className="refreshIcon" onClick={this.props.loadPlayingState} /></h3>
					{this.getDevices()}
				</section>
			)
	}

	render() {
		return (<section className="playingBar">
			<article className="nowPlaying">
				<img />
				<h3>Now Playing</h3>
				<label>Name</label>
			</article>

			<PlayingControls />

			<article className="device">
				{this.devicesPopup()}
				<section className="currentDevice" onClick={this.onClickDevices}>
					<Device className="deviceIcon" />
					<h4>Current Device</h4>
					<label>{this.getCurrentDeviceName()}</label>
				</section>
			</article>
		</section>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingBar);