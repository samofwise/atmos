import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnonymousRoute from './AnnonymousRoute';
import PlaylistsContainer from '../pages/Playlists/PlaylistsContainer';

import { Provider } from 'react-redux';
import Store from 'src/core/Redux/Store';
import SavePlaylistContainer from '../pages/SavePlaylist/SavePlaylistContainer';
import './App.less';
import LoginContainer from '../pages/Login/Login';

const App = () => (
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<AnonymousRoute exact path='/' component={LoginContainer} />
				<AnonymousRoute exact path='/playlists' component={PlaylistsContainer} />
				<AnonymousRoute exact path='/playlists/new' component={SavePlaylistContainer} />
				<AnonymousRoute path='/playlists/*' component={SavePlaylistContainer} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

export default App;
