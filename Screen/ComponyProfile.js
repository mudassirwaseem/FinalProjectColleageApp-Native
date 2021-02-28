import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from "../Config/Firebase"
import Indicater from "./Indicater"


export default function ComponyProfile(){



    const [com,secom] = useState([])
    const [Loading,setloading] = useState(true)

    useEffect(() => {
        let data =  firebase.database().ref("compony")
        data.on("value", datasnap => {
            secom(Object.values(datasnap.val()))
            setloading(false)
           console.log(Object.values(datasnap.val()))
        })
    },[])


    if(Loading ){
        return <View><Indicater/></View>
    }
    
return(

<View style={styles.container}>
  <Text style={{fontSize:24 ,alignItems:"center",fontWeight:"bold",marginLeft:120,color:"#ebebe0",marginTop:20}}>"Vacancies"</Text>
   <ScrollView>
    {com.map((index,key1)=>{
        return  <View key={key1} style={styles.container1}>
       
        <View style={{justifyContent:"center",marginTop:10}}>
            <Text style={{fontWeight: 'bold', color: '#1f1f14',marginLeft:-11, fontSize: 19}}>  {index.industry}</Text>
            <Text style={{fontWeight:"bold"}}>Qualification : {index.Qualification}</Text>
            <Text style={{fontWeight:"bold"}}>Company Name: {index.name}</Text>
            <Text style={{fontWeight:"bold"}}>Contact Num: {index.contact}</Text>
            <Text style={{fontWeight:"bold"}}>Experiance: {index.experience} </Text>
            <Text style={{fontWeight:"bold"}}>Location: {index.location}</Text>
        </View>
    </View>
    })}
    </ScrollView>
</View>



)
}

const styles = StyleSheet.create({
    container1: {
      backgroundColor: '#fff',
      marginBottom:20,
      height: 160,
      color:"#1f1f14",
      width: '90%',
      

     alignSelf: 'center',
     paddingHorizontal: 15,
     marginTop: 15,
     borderRadius: 10,
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    Image: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        borderRadius: 400,
        marginVertical: 40,
     }
     ,
     container:{
         backgroundColor:"#1f1f14",
         marginBottom:20
     }
  });