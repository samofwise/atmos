import * as React from 'react'
import { IState } from 'src/core/Redux/State';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ActionTypes from 'src/core/Redux/Actions/ActionTypes';
import { addTracks, removeTracks } from 'src/core/Redux/Actions/SavePlaylistActions';
import classnames from 'classnames'

const mapStateToProps = (state: IState) =>
	({ savingPlaylist: state.savingPlaylist });

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) =>
	({
		addTracks: (tracks: SpotifyApi.TrackObjectFull[]) => dispatch(addTracks(tracks)),
		removeTracks: (tracks: SpotifyApi.TrackObjectFull[]) => dispatch(removeTracks(tracks))
	})

interface TrackItemProps {
	track: SpotifyApi.TrackObjectFull
}

type Props = TrackItemProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

function TrackItem(props: Props) {
	const images = props.track.album.images;

	const selected = !!props.savingPlaylist.tracks.find((t) => props.track.id == t.id)

	const onClick = () => {
		if (!selected)
			props.addTracks([props.track])
		else
			props.removeTracks([props.track])
	};



	return (
		<article className={classnames('track', { selected })} >
			<img className="image" src={images[images.length - 1].url} onClick={onClick} />
			<i className="far fa-check-circle" />
			<h3>{props.track.name}</h3>
			<div><span className="text">{props.track.artists[0].name}</span><span>|</span><span className="text">{props.track.album.name}</span></div>
		</article>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem)