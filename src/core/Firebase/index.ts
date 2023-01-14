import firebase from "firebase";

export class Firebase {

	private static app: firebase.app.App = null;
	static getApp() {
		return this.app;
	}

	static initialiseApp() {
		try {
			this.app = firebase.app();
		}
		catch (e) {
			var config = {
				apiKey: "AIzaSyD2Jtgb4-ukoWqZ8RD-xGOXa_C9A8vNH9k",
				authDomain: "atmos-10.firebaseapp.com",
				databaseURL: "https://atmos-10.firebaseio.com",
				projectId: "atmos-10",
				storageBucket: "atmos-10.appspot.com",
				messagingSenderId: "940131690694"
			};
			firebase.initializeApp(config);
			const app = firebase.app();
			app.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
			this.app = app;
		}
	}

	static getFireStore() {
		const firestore = firebase.firestore();
		const settings = {/* your settings... */ };
		firestore.settings(settings);
		return firestore;
	}
}