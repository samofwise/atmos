import React from "react";
import Play from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import PlusOne from '@material-ui/icons/ExposurePlus1'
import MinusOne from '@material-ui/icons/ExposureNeg1'
import { IState } from "src/core/Redux/State";
import { connect } from "react-redux";
import { ThunkDispatch } from "src/core/Redux/Thunk";
import { playCurrentlyPlaylist as playCurrentPlaylist, pauseCurrentlyPlaying, nextTrack } from "src/core/Redux/Actions/PlayingActions";

const mapStateToProps = (state: IState) => ({ isPlaying: state.playing.isPlaying });

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
	play: () => dispatch(playCurrentPlaylist()),
	pause: () => dispatch(pauseCurrentlyPlaying()),
	downVote: () => dispatch(nextTrack())
})

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>

class PlayingControls extends React.Component<Props> {

	render() {
		return (
			<article className="controls">
				<PlusOne className="icon" />
				{
					!this.props.isPlaying ?
					<Play className="icon play" onClick={this.props.play} /> :
					<Pause className="icon play" onClick={this.props.pause} />
				}
				<MinusOne className="icon" onClick={this.props.downVote} />
			</article>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingControls)