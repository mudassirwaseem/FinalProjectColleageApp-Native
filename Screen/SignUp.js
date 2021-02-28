import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';

export default function SignUp(props) {

    
  
  return (

    <ScrollView>
    <View style={styles.container}>
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://images.pexels.com/photos/922205/pexels-photo-922205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                />
            </View>
            <Text style={{ fontSize: 32, marginTop: 30, textAlign: "center", color: "#1f1f14", fontWeight: "bold" }}>
                Where Future Begins!!
            </Text>

            
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUpMain')}>
                <Text style={styles.btn1}>Student Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ComponyFoam')}>
                <Text style={styles.btn2}>Company Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('AdminP')} >
                <Text style={styles.btn2}>Admin Login</Text>
            </TouchableOpacity>
        </View>



    </View>
</ScrollView>



  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#ebebe0",
      alignItems: "center",
  },
  tinyLogo: {
      width: 340,
      height: 200
  },
  text: {
      fontSize: 20
  },
  text1: {
      marginTop: 20
  },
  btn1: {
      marginTop: 30,
      backgroundColor: "#3d3d29",
      borderRadius: 20,
      width: 300,
      margin: 10,
      padding: 10,
      color: "white",
      textAlign: "center"
  }
  ,
  btn2: {
      marginTop: 30,
      backgroundColor: "#3d3d29",
      borderRadius: 20,
      width: 300,
      margin: 10,
      padding: 10,
      color: "white",
      textAlign: "center"
  }
})