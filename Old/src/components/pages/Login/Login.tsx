import * as React from 'react'
import firebaseui from 'firebaseui'
import firebase from 'firebase'
import { withRouter, RouteComponentProps } from 'react-router';
import { Firebase } from 'src/core/Firebase';

import './Login.less'

interface State {
	loaded: boolean;
}

class Login extends React.Component<RouteComponentProps<{}>, State> {
	constructor(props: any) {
		super(props);

		Firebase.initialiseApp();

		this.state = { loaded: false }
	}

	signInSuccessWithAuthResult = (authResult: any, redirectUrl?: string) => {
		// User successfully signed in.
		// Return type determines whether we continue the redirect automatically
		// or whether we leave that to developer to handle.
		this.props.history.push('/playlists');
		return false;
	}

	uiShown = () => {
		this.setState({ loaded: true })
	}

	componentDidMount() {
		const ui = new firebaseui.auth.AuthUI(Firebase.getApp().auth());

		Firebase.getApp().auth().onAuthStateChanged(user => {
			if (user)
				this.props.history.push('/playlists');
		})

		const uiConfig = {
			callbacks: {
				signInSuccessWithAuthResult: this.signInSuccessWithAuthResult,
				uiShown: this.uiShown
			},
			signInFlow: 'popup',// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
			signInSuccessUrl: 'localhost:5000/playlists',
			signInOptions: [
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			],
		};

		ui.start('#firebaseui-auth-container', uiConfig);
	}

	render() {
		return (
			<>
				<div id="firebaseui-auth-container"></div>
				{!this.state.loaded ? <div id="loader">Loading...</div> : null}
			</>
		);
	}
}

export default withRouter(Login);