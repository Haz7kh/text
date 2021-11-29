import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function App() {
  var TextInputValue="";
  const handleChangeText = () => console.log(TextInputValue)
 
  return (
    
    <View style={main.container}>
      <View style={{width:400,height:80, backgroundColor:"#ff0066",marginTop:-200,padding:10,}}></View>
  
      <Text style={{ width:400,height:80, color:"black", backgroundColor:"#ffb3ff"}}>
      <Text style={{fontSize:"18",marginRight:210}}>Hello world!</Text>
      my first react App 
      here i will but my first App information..
       what i have done and what i am going to done</Text>
      
      <Text style={{ width:400,margin:10,}}>what are you waiting from this course? </Text>
      <TextInput placeholder="initial text"onChangeText={handleChangeText}
     style={{width:300,height:100, backgroundColor:"#e6ffff",padding:5,marginLeft:-100}} ></TextInput>
     
     <Text style={{ width:400,margin:10,padding:10}}>this is my photo </Text>
      <Image 
      style={{width:400,height:250,margin:10,padding:10,}}
      source={{uri:"https://cdn-japantimes.com/wp-content/uploads/2019/09/p10-schley-helloworld-a-20190919.jpg"}}
      />
      
      <Button title="change the photo"
      style={{margin:10}}
      >
     
     </Button>
      <StatusBar style="auto" />
      
    </View>
  );
  
}

const main = StyleSheet.create({
  container: {
    width:400,
    height:350,
    padding:10,
    flex: 1,
    backgroundColor: '#eee6ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});
