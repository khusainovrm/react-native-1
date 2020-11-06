import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { tailwind, getColor } from 'tailwind'
import BottomMenu from 'components/BottomMenu'

const primary100 = tailwind('text-primary-100').color

export default function App() {
  return (
    <View style={styles.container}>
      <View style={tailwind('items-center')}>
        <View style={tailwind('bg-blue-200 py-1 rounded-full mt-12')}>
          <Text style={tailwind('text-primary-500 font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Заголовок</Text>
        <iframe
        style={tailwind('w-full')}
          // src="https://facecast.net/v/5d4bpk"
        ></iframe>
      </View>

      <View style={tailwind('fixed bottom-0 left-0 right-0 bg-white h-20 w-full')}>
        <BottomMenu/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary100,
    height: 100,
    alignItems: 'center',
  },

})
