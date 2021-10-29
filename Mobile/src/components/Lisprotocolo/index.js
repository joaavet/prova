import React from 'react';
import{ View, Text, StyleSheet} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable' 

export default function Lisprotocolo({data}){
    
   
      

    return (
      
        
        <View>
            <View style ={styles.container}></View>
            <Text style={styles.Text}>{data.prot}</Text>
        </View>
    
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFF',
        paddingHorizontal:10,
        paddingVertical: 20,
    },
    text:{
        fontSize: 14,
        color: '#222'
    },
    leftAction:{
        backgroundColor: '#0ad11e',
        justifyContent:'center',
        flex: 1
    },
        textLeftAction:{
            padding: 20,
            color: '#FFF',
            fontSize:16
        },
        rightAction:{
            backgroundColor: '#a80202',
            justifyContent:'center',
            textAlign: 'right'
        },
            textRightAction:{
                padding: 20,
                color: '#FFF',
                fontSize:16
            }
    
})
