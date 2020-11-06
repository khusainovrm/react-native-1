import React from 'react'
import { Text, View } from 'react-native'
import { tailwind } from 'tailwind'

const BottomMenu = () => {
    return (
          <View  style={tailwind('flex-1 flex-row justify-center items-center text-center')}>

            <View style={tailwind('w-1/3')}>
              <View>
                <View style={tailwind('mdi mdi-play-box-outline')}></View>
              </View>
              <View>
                <View style={tailwind('font-bold')}>
                <Text style={tailwind('text-primary-500 font-semibold')}>Эфиры</Text>
                </View>
              </View>
            </View>

            <View style={tailwind('w-1/3')}>
              <View>
                <View style={tailwind('mdi mdi-calendar-month-outline')}></View>
              </View>
              <View>
                <View style={tailwind('font-bold')}>
                <Text style={tailwind('text-primary-500 font-semibold')}>Расписание</Text>
                </View>
              </View>
            </View>

            <View style={tailwind('w-1/3')}>
              <View>
                <View style={tailwind('mdi mdi-chat-outline')}></View>
              </View>
              <View>
                <View style={tailwind('font-bold')}>
                <Text style={tailwind('text-primary-500 font-semibold')}>Чат</Text>
                </View>
              </View>
            </View>
          </View>
    )
}

export default BottomMenu
