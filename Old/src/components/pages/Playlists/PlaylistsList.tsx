import * as React from 'react'
import PlaylistItem from './PlaylistItem';
import { connect } from 'react-redux'
import { IState } from 'src/core/Redux/State'
import Playlist from 'src/Models/Playlist';
import { playPlaylist } from 'src/core/Redux/Actions/PlayingActions';
import { ThunkDispatch } from 'src/core/Redux/Thunk';

const mapStateToProps = (state: IState) => {
	return { playlists: state.playlists };
};

type Props = ReturnType<typeof mapStateToProps>

class PlaylistsList extends React.Component<Props> {

	componentDidMount() {

	}

	render() {
		return (
			<section className="playlistList">
				{this.props.playlists.map(p => (<PlaylistItem key={p.id} playlist={p} />))}
			</section>
		)
	}
}


export default connect(mapStateToProps)(PlaylistsList);
