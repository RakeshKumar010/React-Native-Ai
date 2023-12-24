import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigater = useNavigation()
  return (
    <SafeAreaView className='flex-1 flex justify-around bg-white'>
      <View className='space-y-2'>
        <Text style={{fontSize:wp(10)}} className='text-center text-gray-700 font-bold'> Jarvis </Text>
      <Text className='text-center text-gray-600 font-semibold tracking-wider'>This future is here, Prowered by AI</Text>
      </View>
      <View className='flex-row justify-center'>
        <Image source={require('../../assets/images/welcome.png')} style={{width:wp(45),height:wp(45)}} />
      </View>
      <TouchableOpacity onPress={()=>{
        navigater.navigate('home')
      }} className='bg-emerald-600 p-3 flex-row justify-center mx-4 rounded-lg'>
        <Text style={{fontSize:wp(6)}}  className='text-white  font-bold'>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen