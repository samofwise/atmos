import * as React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Spotify from 'src/core/Spotify';
import SearchPage from './SearchPage';


export default class SpotifySearch extends React.Component {
	constructor(props: any) {
		super(props);
		
		this.state = { searchPage: 'search' }
	}

	render() {
		return (
			<section className="search">
				<SearchPage />
			</section>
		)
	}
}



