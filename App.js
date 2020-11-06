import React from 'react'
import { Text, View } from 'react-native'
import {tailwind} from './tailwind';


export default function App() {
  return (
    <View  style={tailwind('h-full')}>
		<View style={tailwind('pt-12 items-center')}>
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
				<Text style={tailwind('text-primary-500 font-semibold')}>
					Hello Tailwind
				</Text>
			</View>
		</View>
	</View>
  );
}
