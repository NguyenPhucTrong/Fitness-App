import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from '../api/exercisedb';
import { demo } from '../constants';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/Exercise_lst';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercise() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("item", item);

  const [exercises, setExercises] = useState([]);
  
  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, [item])
  
  const getExercises = async (bodypart) => {
    // fetch exercises from API
    let data = await fetchExercisesByBodyPart(bodypart);
    setExercises(data);
    // console.log("data", data);
  }

  return (
    <ScrollView>
      <StatusBar
      style='light'
      />
      <Image
        source={item.image}
        style={{width:wp(100), height:hp(45 )}}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        onPress={()=>router.back()}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>
      <View className="mx-4 space-y-3 mt-4 " >
          <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700" >
            {item.name} Exercise
        </Text>
        <View className="mb-10" >
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
    // <View className="mt-20" >
    //   <Text>Exercise</Text>
    //   <TouchableOpacity onPress={()=>router.back()}>
    //   <Text>Go back</Text>
    //   </TouchableOpacity>
    // </View>
  )
}