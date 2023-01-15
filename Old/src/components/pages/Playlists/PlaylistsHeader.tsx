import React from "react";
import { Link } from 'react-router-dom';


export default class PlaylistsHeader extends React.Component {
	render() {
		return (<header>
			<h1>Playlists</h1>
			<Link to="/playlists/new" className="button newPlaylist">+ New Playlist</Link>
		</header>)
	}
}