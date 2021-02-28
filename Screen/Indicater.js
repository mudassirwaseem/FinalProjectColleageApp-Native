import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View, ActivityIndicator,   } from 'react-native';


export default function Indicater(){
    return(
        <View >
 <ActivityIndicator size={70} animating={true} color="#ebebe0" style={styles.loading} />     
         
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"black"
    },
   loading: {
    position: "relative",
    zIndex: 1,
    backgroundColor: '#1f1f14',
    opacity: 0.8,
    height: '100%',
    width: '100%',

  }
  });