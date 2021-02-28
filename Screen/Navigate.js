import React , {useEffect} from 'react';
import { StyleSheet, View, ScrollView, Text, Button, TouchableOpacity, Image } from 'react-native';
import firebase from '../Config/Firebase'


export default function Navigation(props) {
   
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                props.navigation.navigate("Dashboard")
                
            }
        });
    }, [])


    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://images.pexels.com/photos/922205/pexels-photo-922205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
            />
            <Text style={{ fontSize: 28, marginTop: 30, textAlign: "center", color: "#1f1f14", fontWeight: "bold" }}>
            Welcome to Mahaan College
            </Text>

            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} >
                <Text style={styles.btn1}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.btn2}>Sign Up</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebe0",
        alignItems: "center",
    },
    btn1: {
        backgroundColor: "#1f1f14",
        marginTop: 40,
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize:16,
        fontWeight:"bold",
    },
    btn2: {
        backgroundColor: "#3d3d29",
        width: 300,
        borderRadius: 20,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize:16,
        fontWeight:"bold"
    },
    tinyLogo: {
        width: 330,
        height: 200,
        marginTop: 40,
        borderRadius:10
    }
})