import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1,alignItems:"center" , paddingRight:3, backgroundColor:'#B4E0EA', paddingTop:150}}>
      <Image source={require("../../assets/images/welcome.png")}/>
      <Text style={{color:'#EF5C0C',fontSize:17, fontWeight:"bold", marginTop:30}}>
        Explore the Best Recipes With Aood
      </Text>
      <Text style={{fontSize:35,fontWeight:'bold',marginTop:3 }}>Delicious Discoveries</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Home')} 
          style={{
          backgroundColor:'#EF5C0C',
          width:'70%',
          alignItems:'center',
          paddingVertical:18,
          borderRadius:20, 
          elevation:0.9,
          marginTop:40}}
          >
            <Text style={{color:"#ffffff", fontSize:20, fontWeight:'600'}}>Start Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})