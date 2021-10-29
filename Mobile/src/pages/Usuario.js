import React, { useEffect, useState } from 'react'
import {SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ActivityIndicator, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import avatar from "../../assets/logo.png"


export default function Usuario({ navigation }) {

  const [user , setUser] = useState('');
  const [nome, setNome] = useState('');
  const [ra , setRa]= useState('');
  const [email , setEmail] = useState('');
  const [password, setPassword]= useState('');

  useEffect(() => {    
    AsyncStorage.getItem('@user').then(user => {
      if(!user){
        
        navigation.navigate("Login")
      }else{
        setUser(JSON.parse(user))
        
       }
    })
  })
  

  function back(){
    navigation.navigate("Index")

  }
  return (
    <SafeAreaView style ={styles.container}>
        <View ><Image style={styles.avatar}source= {avatar} PlaceholderContent={<ActivityIndicator />}></Image></View>
        <View style = {styles.form}>
        <TextInput
          style ={styles.input}
          placeholder = "Nome"
          placeholderTextColor = "#888"
          autoCapitalize = "words"
        />


        <TextInput
          style ={styles.input}
          placeholder = "E-mail"
          textContentType = "emailAddress"
          placeholderTextColor = "#888"
        />

        <TextInput
          style ={styles.input}
          placeholder = "RA"
          placeholderTextColor = "#888"
          keyboardType = "numeric"
          maxLength = {10}
          value = {ra}
          onChangeText= {setRa}
        />
        
        <TextInput
          style ={styles.input}
          placeholder = "Senha"
          placeholderTextColor = "#888"
          secureTextEntry = {true}
          maxLength = {14}
          value = {password}
          onChangeText = {setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.TextButton}>Salvar</Text>
        </TouchableOpacity>
        </View>

      <TouchableOpacity onPress={back}>
        <Text> Voltar</Text> 
        </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container :{ 
    flex: 1,
    alignItems : 'center',
    marginTop:30,
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginVertical: 30,
  },
  form:{
    alignSelf : 'stretch',
    paddingHorizontal: 20, 
    marginTop: 0
  },
  input:{
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 10,
    borderRadius:10,
    height: 45,
    fontSize: 18,
    marginBottom:10
  },
  label:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: "#555"
  },
  button:{
    backgroundColor: "#05509b",
    borderRadius:10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  TextButton:{
    color: "#FFF",
    fontSize: 20,
    textAlign: "center"
  }
});
