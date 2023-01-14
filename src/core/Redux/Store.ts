import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Playlist from 'src/Models/Playlist';
import DefaultReducer  from './Reducers/RootReducer';



const Store = createStore(DefaultReducer, applyMiddleware(thunk));

export default Store;