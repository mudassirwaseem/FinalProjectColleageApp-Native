import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from "../Config/Firebase"
import Indicater from "./Indicater"




export default function SProfile({route}) {
   
    const [Student1, setStudent] = useState([])
    const [Loading, setloading] = useState(true)

    useEffect(() => {
        let data = firebase.database().ref("user")
        data.on("value", datasnap => {
            setStudent(Object.values(datasnap.val()))
            setloading(false)
            console.log(Object.values(datasnap.val()))
        })
    }, [])




    if (Loading) {
        return <View><Indicater />
        
        </View>
    }
    return (

        <View style={styles.container}>
            <ScrollView>
                {Student1.map((index,key1) => {
                    return <View key={key1} style={styles.container1}>

                        <View style={{ justifyContent: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: '#1f1f14', marginLeft: -11, fontSize: 19 }}>  {index.Name}</Text>
                            <Text style={{ fontWeight: "bold" }}>Qualification : {index.Qualification}</Text>
                            <Text style={{ fontWeight: "bold" }}>Contact:{index.contact}</Text>
                            <Text style={{ fontWeight: "bold" }}>Address: {index.address}</Text>
                            <Text style={{ fontWeight: "bold" }}>Experience: {index.Experience} </Text>
                            <Text style={{ fontWeight: "bold" }}>Age: {index.age}</Text>
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
        height: 160,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginTop: 15,
        color: "#1f1f14",
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
    container: {
        backgroundColor: "#1f1f14",
        flex: 1
    }
});