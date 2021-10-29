import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'

export default function Faltas({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
            <Text>
                **********************************************************
                </Text>
                <Text>
                     Faltas: 12
                
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
       },
  
    text: {
      fontSize: 32,
      color: "#000"
    }
  });