import * as React from 'react'
import SpotifySearch from './SpotifySearch';
import CurrentPlaylist from './CurrentPlaylist';
import { IState } from 'src/core/Redux/State'
import { connect } from 'react-redux';
import './SavePlaylist.less'
import { Dispatch } from 'redux';
import { changeName } from 'src/core/Redux/Actions/SavePlaylistActions';
import { Firebase } from 'src/core/Firebase';

interface NewPlaylistState {
	isCreate: boolean;
}

const mapStateToProps = (state: IState) => {
	return { savingPlaylist: state.savingPlaylist };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return { changeName: (name: string) => dispatch(changeName(name)) }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SavePlaylistContainer extends React.Component<Props, NewPlaylistState> {
	constructor(props: any) {
		super(props);

		Firebase.initialiseApp();

		this.state = {
			isCreate: true,
		}
	}

	changeName = (event: any) => {
		this.props.changeName(event.target.value)
	};

	render() {
		return (
			<>
				<header className="uncollapse-margins"><h1>{this.state.isCreate ? 'New Playlist' : 'Edit Playlist'}</h1></header>
				<section className="savePlaylistContainer">
					<article className="savePlaylist">
						<label>Name</label>
						<input value={this.props.savingPlaylist.name} onInput={this.changeName} />
						<SpotifySearch />
					</article>
				</section>
				<CurrentPlaylist />
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePlaylistContainer)