import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ThunkDispatch } from "src/core/Redux/Thunk";
import { Button } from "@material-ui/core";

import { IState } from "src/core/Redux/State";
import { savePlaylist } from "src/core/Redux/Actions/SavePlaylistActions";
import Playlist from "src/Models/Playlist";
import TrackItem from "./TrackItem";

const mapStateToProps = (state: IState) => ({ savingPlaylist: state.savingPlaylist });

const mapDispatchToProps = (dispatch: ThunkDispatch) =>
	({ savePlaylist: (playlist: Playlist) => dispatch(savePlaylist(playlist)) });

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{}>

const CurrentPlaylist = (props: Props) => {
	const onSave = () => {
		props.savePlaylist(props.savingPlaylist);
		props.history.push('/playlists');
	}

	return (
		<section className="currentPlaylist">
			<h2>{props.savingPlaylist.name || 'Playlist Name'}</h2>
			<section className="tracks">
				{props.savingPlaylist.tracks.map(t => <TrackItem key={t.id} track={t} />)}
			</section>
			<Button variant="contained" color="primary" onClick={onSave}>Save</Button>
		</section>
	)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentPlaylist));