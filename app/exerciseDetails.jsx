import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
    console.log("item", item);
  return (
    <View className="flex flex-1" >
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]" >
        <Image
          source={{ uri: item.gifUrl }}
          contentFit='cover'
          style={{ width: wp(100), height: wp(100) }} 
          className="rounded-b-[40px] mt-10"

        />
      </View>

      <TouchableOpacity
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        onPress={()=>router.back()}
      >

        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />

      </TouchableOpacity>

      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} >

        <Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-700 tracking-wide"
        >{item.name}</Text>

        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >Equiment <Text className="font-bold text-neutral-800 tracking-wide" >{item?.equipment}</Text>
        </Text>

        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >Secondary Muscles <Text className="font-bold text-neutral-800 tracking-wide" >{item?.secondaryMuscles}</Text>
        </Text>

        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >Target <Text className="font-bold text-neutral-800 tracking-wide" >{item?.target}</Text>
        </Text>

        <Text
          style={{ fontSize: hp(3) }}
          className=" font-semibold text-neutral-800 tracking-wide"
        >Instructions:
        </Text>
        {
          item?.instructions.split(",").map((instructions, index) => {
            return (
              <Text
                key={instructions}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800 tracking-wide"
              >• {instructions}</Text>
            )
          })
        }

      </ScrollView>
    </View>
  )
}