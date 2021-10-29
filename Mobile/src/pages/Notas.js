import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'

export default function Notas({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
         
        <Text>
                </Text>
                <Text>
                   1 Bimestre:  75
                   </Text><Text>
                    2 Bimestre:  94
                   </Text><Text>
                    3 Bimestre:  87
                   </Text><Text>
                    4 Bimestre : 88
                </Text> 
            </View>
        </View>
    );


            }
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
     
       },
  
    Text: {
      fontSize: 32,
      color: "#000"
    }
  });