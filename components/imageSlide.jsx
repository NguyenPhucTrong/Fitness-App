import { View, Text } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { silderImage } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ImageSlide() {
  return (
    <Carousel
          data={silderImage}
          loop={true}
          autoplay={true}
          renderItem={itemCard}
          hasParallaxImages={true}
          sliderWidth={wp(100)}
          firstItem={1}
          autoplayInterval={3000}
          itemWidth={wp(100) - 70}
          slideStyle={{display: 'flex', alignItems: 'center'}}
      />
  )
}

const itemCard = ({item,index},parallaxProps) => {
    return (
        <View style={{width:wp(100)-70, height:hp(25)}}>
            <ParallaxImage
                source={item}
                containerStyle={{ borderRadius: 30, flex: 1 }}
                style={{ resizeMode: "contain" }}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}