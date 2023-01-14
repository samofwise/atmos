import * as React from 'react'
import PlaylistsList from './PlaylistsList';

import './Playlists.less'
import PlayingBar from './PlayingBar';
import PlaylistsHeader from './PlaylistsHeader';
import { loadPlaylists, PlaylistActionTypes } from 'src/core/Redux/Actions/PlaylistActions';
import { connect } from 'react-redux';
import { Firebase } from 'src/core/Firebase';
import { ThunkDispatch } from 'src/core/Redux/Thunk';


const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
	loadPlaylists: () => dispatch(loadPlaylists())
})

type Props = ReturnType<typeof mapDispatchToProps>;

class PlaylistsContainer extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		Firebase.initialiseApp();

		Firebase.getApp().auth().onAuthStateChanged(user => {
			props.loadPlaylists();
		})
	}

	render() {
		return (
			<section className="playlists">
				<PlaylistsHeader />
				<PlaylistsList />
				<PlayingBar />
			</section>
		)
	}
}

export default connect(null, mapDispatchToProps)(PlaylistsContainer)