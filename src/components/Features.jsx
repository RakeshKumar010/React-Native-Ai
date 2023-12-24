import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Features = () => {
  return (
    <View className="mx-5 space-y-2" style={{height: hp(60)}}>
      <Text style={{fontSize: wp(6)}} className="text-gray-600 font-bold ">
        Features
      </Text>
      <View className="bg-emerald-200 p-3 rounded-lg space-y-2">
        <View className="flex-row items-center space-x-2">
          <Image
            source={require('../../assets/images/chatgptIcon.png')}
            style={{width: wp(12), height: wp(12)}}
          />
          <Text
            className="text-gray-600 font-semibold"
            style={{fontSize: wp(5)}}>
            ChatGPT
          </Text>
        </View>
        <Text className="text-gray-600">
          ChatGPT is a sibling model to InstructGPT, which is trained to follow
          an instruction in a prompt and provide a detailed response.
        </Text>
      </View>
      <View className="bg-purple-200 p-3 rounded-lg space-y-2">
        <View className="flex-row items-center space-x-2">
          <Image
            source={require('../../assets/images/dalleIcon.png')}
            style={{width: wp(12), height: wp(12)}}
          />
          <Text
            className="text-gray-600 font-semibold"
            style={{fontSize: wp(5)}}>
            DALL-E
          </Text>
        </View>
        <Text className="text-gray-600">
          DALL·E 3 is designed to decline requests that ask for an image in the
          style of a living artist.
        </Text>
      </View>
      <View className="bg-cyan-200 p-3 rounded-lg space-y-2">
        <View className="flex-row items-center space-x-2">
          <Image
            source={require('../../assets/images/smartaiIcon.png')}
            style={{width: wp(12), height: wp(12)}}
          />
          <Text
            className="text-gray-600 font-semibold"
            style={{fontSize: wp(5)}}>
            SmartAi
          </Text>
        </View>
        <Text className="text-gray-600">
          ChatGPT is a sibling model to InstructGPT, which is trained to follow
          an instruction in a prompt and provide a detailed response.
        </Text>
      </View>
    </View>
  );
};

export default Features;
