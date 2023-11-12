import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getCategories();
    getRecipes();
  },[])

  const handleChangeCategory = category=>{
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }

  const getCategories = async ()=>{
    try{
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      if(response && response.data){
        setCategories(response.data.categories);
      }
    }catch(err){
      console.log('error: ',err.message);
    }
  }
  const getRecipes = async (category="Beef")=>{
    try{
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if(response && response.data){
        setMeals(response.data.meals);
      }
    }catch(err){
      console.log('error: ',err.message);
    }
  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
      >
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image source={require('../../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}} />
          <BellIcon size={hp(4)} color="gray" />
          
        </View>
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7),marginBottom:10}} className="text-neutral-600">Hello, Daha 👋</Text>
                
        
        <View className="mx-4 flex-row items-center rounded-full bg-black/10 p-[6px]" style={{marginBottom:10}}>
          <TextInput
            placeholder='Search for recipe'
            placeholderTextColor={'black'}
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="#A5F3FC" />
          </View>
        </View>

          <View>
            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">Be your own chef,</Text>
          </View>
          <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">
            With <Text style={{color:"#A5F3FC",fontSize:40}}>Aood🍜</Text>
          </Text>
        </View>    
        <View>
          { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
        </View>
        <View>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  )
}