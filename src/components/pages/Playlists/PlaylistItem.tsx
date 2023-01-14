import * as React from 'react'
import Playlist from 'src/Models/Playlist';
import { ThunkDispatch } from 'src/core/Redux/Thunk';
import { playPlaylist } from 'src/core/Redux/Actions/PlayingActions';
import { connect } from 'react-redux';

interface Properties {
	playlist: Playlist;
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
	playPlaylist: (playlist: Playlist) => dispatch(playPlaylist(playlist)),
})

type Props = Properties & ReturnType<typeof mapDispatchToProps>

class PlaylistItem extends React.Component<Props> {

	getImages = () => {
		const imageCount = 4;
		const images = this.props.playlist.tracks.slice(0, 3).map(t => t.album.images[0]);
		const imageDifference = imageCount - images.length;

		if (imageDifference > 0) {
			const extraImages = new Array(imageDifference);
			const lastImage = images[images.length - 1];
			extraImages.fill(lastImage);
			images.push.apply(images, extraImages);
		}

		return (<div className="images">
			<img src={images[0].url} width="50rem" />
			<img src={images[1].url} width="50rem" />
			<img src={images[2].url} width="50rem" />
			<img src={images[3].url} width="50rem" />
			<div className="overlay"></div>
		</div>)
	}

	onClick = () => {
		this.props.playPlaylist(this.props.playlist);
	}

	render() {
		return (
		<article className="playlistItem" onClick={this.onClick}>
			{this.getImages()}
			<h3>{this.props.playlist.name}</h3>
		</article>)
	}
}


export default connect(null, mapDispatchToProps)(PlaylistItem);