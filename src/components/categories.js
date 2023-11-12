import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {categoryData} from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';

export default function Categories({categories, activeCategory, handleChangeCategory}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <Text style={{fontSize: hp(3) }} className="font-semibold text-black mb-5 ml-3">Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            categories.map((cat, index)=>{
                let isActive = cat.strCategory==activeCategory;
                let activeButtonClass = isActive? ' bg-cyan-200': ' bg-black/10';
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={()=> handleChangeCategory(cat.strCategory)}
                        className="flex items-center space-y-1"
                    >
                        <View className={"rounded-full p-[6px] "+activeButtonClass}>
                            <CachedImage
                                uri={cat.strCategoryThumb}
                                style={{width: hp(6), height: hp(6)}}
                                className="rounded-full"
                            />
                        </View>
                        <Text className="text-neutral-600" style={{fontSize: hp(1.6)}}>
                            {cat.strCategory}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </Animated.View>
  )
}