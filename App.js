import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import logo from '@/images/me.jpg'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import { tailwind } from 'tailwind'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled === true) {
      return
    }

    setSelectedImage({ localUri: pickerResult.uri })
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`)
      return
    }

    await Sharing.shareAsync(selectedImage.localUri)
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity
          onPress={openShareDialogAsync}
          style={tailwind('bg-blue-500 rounded-md mt-10 p-2')}
        >
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      <Image source={logo} style={styles.logo} />

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={tailwind('bg-blue-500 rounded-md mt-10 p-2')}
      >
        <Text style={styles.buttonText}>Take a picture</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instruction: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
})
