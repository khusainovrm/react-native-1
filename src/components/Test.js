import React from 'react';
// import { Text, View } from 'react-native';
import { View, Text } from "react-native-tailwind";

const  Test = ({text}) => {
  return (
    <View className="w-full bg-green-500">
      <Text className="text-2xl">{text}</Text>
    </View>
  )
}

export default Test

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
