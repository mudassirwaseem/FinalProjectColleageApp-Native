import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image,  TouchableOpacity, ScrollView } from 'react-native';
import firebase from "../Config/Firebase"


 
export default function Dashboard({ navigation ,route }) {
    const Logout = () => {
        firebase.auth().signOut()
            .then(() => {
                alert("User Log out")
                navigation.navigate("Login")

            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container} >
            <View>

                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://images.pexels.com/photos/6147157/pexels-photo-6147157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        }}
                    />
                </View>
                <View style={{alignItems:"center",marginTop:50}}>
                <TouchableOpacity onPress={()=> navigation.navigate("SProfile")}  >
                    <Text style={styles.btn1}>Student Profiles</Text>
                </TouchableOpacity > 
                <TouchableOpacity  onPress={()=> navigation.navigate("ComponyProfile")}>
                    <Text style={styles.btn2}>Job Vecancies</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Logout} >
                    <Text style={styles.btn3}>Log Out</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebe0'
    },
    btn1: {
        backgroundColor: "#1f1f14",
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        marginTop:30
    },
    tinyLogo: {
        width: 340,
        height: 250,
        marginTop: 50,
        borderRadius:10
    },
    btn2: {
        backgroundColor: "#3d3d29",
        borderRadius: 10,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop:20
    },
    btn3: {
        backgroundColor: "#5c5c3d",
        borderRadius: 10,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop:20

    },
    tinyLogo: {
        width: 340,
        height: 200,
        marginTop: 20,
        marginLeft: 10
    }
})