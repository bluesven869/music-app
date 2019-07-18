import React from 'react'
import { AppState } from 'react-native'
import { Provider } from 'react-redux'
import TrackPlayer from 'react-native-track-player'

import store from './store'
import Playlist from '../scenes/Playlist'

import { updatePlayback, initializePlayback } from '../reducers/Player/actions'
import Handler from '../reducers/Player/handler'

export default function withProvider() {
	store.dispatch(initializePlayback())

	AppState.addEventListener('change', appState => {
		if (appState == 'active') {
			store.dispatch(updatePlayback())
		}
	})

	TrackPlayer.registerEventHandler(Handler(store.dispatch))

	return (
		<Provider store={store}>
			<Playlist />
		</Provider>
	)
}
