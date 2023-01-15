import * as React from "react";
import SearchResultsGroup from "./SearchResults";
import SearchGroup from "./SearchGroup";
import Spotify from "src/core/Spotify";


type ValidSearchGroup = 'tracks'

interface SearchPageState {
	searchString: string;
	searchGroup: ValidSearchGroup;
	recent: SpotifyApi.TrackObjectFull[];
	tracks: SpotifyApi.TrackObjectFull[];
}

export default class SearchPage extends React.Component<{}, SearchPageState> {
	constructor(props: {}) {
		super(props);
		Spotify.initialise();
		this.state = { searchString: '', searchGroup: 'tracks', recent: [], tracks: [] }
	}

	async componentDidMount() {
		const recentResponse = await Spotify.Api.getMyRecentlyPlayedTracks();
		const ids = recentResponse.items.map(i => i.track.id);
		const distinctIds = [... new Set(ids)];
		const trackResponse = await Spotify.Api.getTracks(distinctIds);
		this.setState({ recent: trackResponse.tracks })
	}

	searchUpdate = async (e: React.SyntheticEvent<HTMLInputElement>) => {
		const query = e.currentTarget.value;
		this.setState({ searchString: query });

		if (query && query.length) {
			this.loadTracks(query);
		}
		else {
			this.setState({ tracks: [] });
		}
	}

	loadTracks = async (query: string, limit?: number) => {
		const options = limit ? { limit } : null;
		var response = await Spotify.Api.searchTracks(query, options);
		await this.setState({ tracks: response.tracks.items });
	}

	loadAlbums = async (limit?: number) => {
		var response = await Spotify.Api.searchAlbums(this.state.searchString, { limit });
		// await this.setState({ albums: response.albums.items });
	}

	loadArtists = async (limit?: number) => {
		var response = await Spotify.Api.searchArtists(this.state.searchString, { limit });
		// await this.setState({ artists: response.artists.items });
	}

	changeSearchGroup = (e: React.MouseEvent<HTMLDivElement>) => {
		const newGroup = e.currentTarget.getAttribute('value') as ValidSearchGroup;
		this.setState({ searchGroup: newGroup })
	}

	getSearchResults = () => {
		if (!this.state.searchString)
			return <SearchResultsGroup name="Recent" tracks={this.state.recent} />
		else {
			return <SearchResultsGroup name="Tracks" tracks={this.state.tracks} />
		}
	}

	getSearchGroup = (label: string, value: ValidSearchGroup) =>
		<SearchGroup {...{ label, value }} selected={this.state.searchGroup === value} onClick={this.changeSearchGroup} />

	render() {
		return (
			<article className="searchPage">
				<label>Search</label>
				<input value={this.state.searchString} onInput={this.searchUpdate} placeholder="Search..." />
				{this.getSearchResults()}
			</article>
		)
	}
}