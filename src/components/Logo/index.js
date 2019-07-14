import React from 'react'
import { View } from 'react-native'
import { Music } from '../Icons'

export default function Logo() {
	return (
		<View style={styles.container} pointerEvents="none">
			<Music />
		</View>
	)
}

const styles = {
	container: {
		height: 30,
		position: 'absolute',
		width: '100%',
		top: 25,
		alignItems: 'center',
		zIndex: 98
	}
}
