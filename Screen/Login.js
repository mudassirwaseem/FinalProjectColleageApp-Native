import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../Config/Firebase'

export default function Login({ navigation, route }) {

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            
            if (user) {
                console.log("user_t", user)
                navigation.navigate("Dashboard", { user })
            }
        });
    }, [])


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const Login = (() => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("User Login")
                navigation.navigate("Dashboard")
                // Signed in
                var user = userCredential.user;
                
            })
            .catch((error) => {
                // console.log(error.message)
                alert(error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    })




    return (

        <View style={styles.container}>


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

                        <Text style={{ fontSize: 20, marginTop: 10, color: "#1f1f14", fontWeight: "bold" }}>Login To Continue</Text>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Email:</Text>
                            <TextInput
                                onChangeText={(val) => setemail(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto", marginTop: 10,
                                    borderColor: '#1f1f14', borderBottomWidth: 2, backgroundColor: "#ebebe0", width: 300
                                }}
                                placeholder="Enter Email"
                            />
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Password:</Text>
                            <TextInput
                                secureTextEntry={true}
                                onChangeText={(val) => setpassword(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto", marginTop: 10,
                                    borderColor: '#1f1f14', borderBottomWidth: 2, backgroundColor: "#ebebe0", width: 300
                                }}
                                placeholder="Enter Password"
                            />
                        </View>



                        <TouchableOpacity onPress={Login}  >
                            <Text style={styles.btn1}>Login</Text>
                        </TouchableOpacity>

                    </View>



                </View>
            </ScrollView>




        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebe0',
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
        marginTop: 40,
        backgroundColor: "#1f1f14",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    }
})