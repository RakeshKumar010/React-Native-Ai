import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';
import {dummyMessages} from '../consents';

const HomeScreen = () => {
  const [message, setMessage] = useState(dummyMessages);
  const [startRecording,setStartRecording]=useState(false)
  return (
    <View className="bg-white flex-1">
      <View className="mx-4">
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/welcome.png')}
            style={{width: wp(45), height: wp(45)}}
          />
        </View>
        {message.length>0 ? (
          <>
            <View className="space-y-2">
              <Text
                style={{fontSize: wp(5)}}
                className="font-bold text-gray-600">
                Assistent
              </Text>
              <View
                className="bg-gray-300 rounded-2xl p-4"
                style={{height: hp(50)}}>
                <ScrollView className="space-y-3">
                  {message.map(({role, content}, index) => {
                    if (role == 'assistant') {
                      if (content.includes('https')) {
                        return (
                          <View className="flex-row justify-start " key={index}>
                            <View className="p-2 bg-green-200 rounded-2xl rounded-tl-none">
                              <Image
                                source={{uri: content}}
                                width={wp(60)}
                                height={wp(60)}
                                className="rounded-2xl"
                              />
                            </View>
                          </View>
                        );
                      } else {
                        return (
                          <View className="flex-row justify-start " key={index}>
                            <View
                              style={{width: wp(70)}}
                              className="p-2 bg-green-200 rounded-2xl rounded-tl-none">
                              <Text className="text-black">{content}</Text>
                            </View>
                          </View>
                        );
                      }
                    } else {
                      return (
                        <View className="flex-row justify-end " key={index}>
                          <View
                            style={{width: wp(70)}}
                            className="p-2 bg-white rounded-2xl rounded-tl-none">
                            <Text className="text-black">{content}</Text>
                          </View>
                        </View>
                      );
                    }
                  })}
                </ScrollView>
              </View>
             
            </View>
          </>
        ) : (
          <>
            <Features />
          </>
        )}
      </View>
      <View className='flex-row justify-center items-center '>
                {startRecording?<TouchableOpacity onPress={()=>{
                  setStartRecording(false)
                }} className='bg-red-400 p-2 rounded-lg absolute left-10'>
                  <Text className='text-white font-bold ' >Stop</Text>
                </TouchableOpacity>:null}
               { startRecording?<TouchableOpacity onPress={()=>{
                  setStartRecording(false)
                }}>
                  <Image
                    source={require('../../assets/images/voiceLoading.gif')}
                    style={{width: wp(25), height: wp(25)}}
                  />
                </TouchableOpacity>:<TouchableOpacity onPress={()=>{
                  setStartRecording(true)
                }}>
                  <Image
                  
                    source={require('../../assets/images/recordingIcon.png')}
                    style={{width: wp(25), height: wp(25)}}
                  />
                </TouchableOpacity>}
                {message.length>0?<TouchableOpacity onPress={()=>{
                  setMessage([])
                }} className='bg-gray-400 p-2 rounded-lg absolute right-10'>
                  <Text className='text-white font-bold'>
                    Clear
                  </Text>
                </TouchableOpacity>:null}
              </View>
    </View>
  );
};

export default HomeScreen;
