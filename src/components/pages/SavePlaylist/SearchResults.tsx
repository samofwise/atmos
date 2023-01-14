import * as React from 'react'
import TrackItem from './TrackItem';

interface Props {
	name: string;
	tracks: SpotifyApi.TrackObjectFull[]
}

export default function SearchResultsGroup(props: Props) {
	return (
		<>
		<h3>{props.name}</h3>
		<section className="results">
			{props.tracks.map(t => (<TrackItem key={t.id} track={t} />))}
		</section>
		</>
	)
}
