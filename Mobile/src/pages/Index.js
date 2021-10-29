import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'


import avatar from "../../assets/logo.png"
import api from '../service/api'
import  ListItem from '../components/ListItem'

export default function Index({ navigation }) {

  const [user, setUser] = useState('');
  const [materias, setMaterias] = useState('');
  
  
  function protocol() {
    navigation.navigate('Protocolo');
  }
  


  async function listaMaterias(){
    const materias = await api.get('/materia')
   console.log(materias.data)
    if(materias.status == 200){
      setMaterias(materias.data)
    }else{
      let msgError =response.data;
      console.log(msgError.mensagem);
    }
   
   }

   
  useEffect(() => {  
    if(!materias){
      listaMaterias()
    }  
    AsyncStorage.getItem('@user').then(user => {
      if(!user){
        navigation.navigate("Login")
      }else{
        setUser(JSON.parse(user))
       
       }
    }) 
  })

   

  function logoff(){
    AsyncStorage.removeItem('@user'); // desloga o usuario
    navigation.navigate("Login")
  }

  function settings(){
    navigation.navigate('Usuario')
  }


    return (
      <View style={styles.container}>
        <View style={styles.header}>

        <View style={styles.form}>
        <TouchableOpacity onPress={protocol} style={styles.protocolButton}>
          <Text style={styles.protocolTextButton}>
            Protocolo
          </Text>
        </TouchableOpacity>
      </View>
          <View>
            <Image source= {avatar} style={[styles.avatar]}></Image>
          </View>
          <View>
              <Text style={styles.Name}>{user.name}</Text>
              <Text>Matricula: {user.ra}</Text>
              <Text>{user.email}</Text>
          </View>

          <View style={styles.areaLogout}>
            <Icon onPress={logoff} style={styles.logout} name='logout' />
          
          <View style={styles.areaConfig}>
            <Icon onPress={settings} style={styles.config} name='cog' type='font-awesome' />
          </View>
 
          </View>


        </View>

        <View>
         <FlatList 
          data ={materias}
          keyExtractor = {item => item._id}  
          renderItem={({ item }) => ( 
          <ListItem
            data = {item}
            handleLeft = {()=>  navigation.navigate('Notas')}
            handleRight = {()=> {navigation.navigate('Faltas')}}
          />
          )} 
          
          ItemSeparatorComponent = {() => <Separator/>}
   />

        
           
        
        </View>

      </View>
    );
  }
  const Separator = () => <View style ={{flex : 1 , height: 2 , backgroundColor: '#DDD'}}></View>
  const styles = StyleSheet.create({
    container :{
      flex:1,
      alignItems: 'center'
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    paddingHorizontal: 10
  },
  Name: {
    fontSize: 30,
    flexDirection: "row",
  },
  text: {
    fontSize: 32,
    color: "#000"
  },
  areaLogout: {
    width: 80,
    height: 80,
    marginVertical: "5%",

  },
  areaConfig: {
    height: 40,
    paddingVertical: 10
  },
  logout: {
    marginVertical: 20,
    textAlign: "center"
    

  },
  config: {
    marginVertical: 10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50, 
    marginHorizontal: 10
  }
});