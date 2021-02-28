import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import firebase from '../Config/Firebase'


export default function StudentFoam({ navigation, route }) {


    
    const [gender, setgender] = useState("Male")
    const [Qualification, setQualification] = useState("BSC")
    const [age, setage] = useState("")
    const [verify, setVerify] = useState("")
    const [address, setaddress] = useState("")
    const [Experience, setExperience] = useState("")


    const Next = (() => {
        let value = { gender, Qualification,age, verify ,address,Experience}
        firebase.database().ref("users").push(value)
        alert("Information Submit")
        navigation.navigate("Dashboard")
 
    })


    
    return (

        <View style={styles.container}>


            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container}>

                        <Text style={{ fontSize: 26, marginTop: 20, color: "blue", fontWeight: "bold" }}>Fill your Information</Text>
                       
                      
                        <View style={styles.text1}>
                            <Text style={styles.text}>Age:</Text>
                            <TextInput

                                onChangeText={(val) => setage(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: 'blue', borderBottomWidth: 2, backgroundColor: "white", width: 300
                                }}
                                placeholder="Enter Your Age"
                            />
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Gender:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "red" }}
                                        placeholderIconColor="red"
                                        selectedValue={gender}
                                        onValueChange={(value) => {
                                            setgender(value)
                                        }}>


                                        <Picker.Item label="Male" value="Male" />
                                        <Picker.Item label="Female" value="Female" />

                                    </Picker>
                                </Item>
                            </Form>
                        </View>


                      
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Qualification:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "red" }}
                                        placeholderIconColor="red"
                                        selectedValue={Qualification}
                                        onValueChange={(value) => {
                                            setQualification(value)
                                        }}>


                                        <Picker.Item label="BSC" value="BSC" />
                                        <Picker.Item label="INTERMEDIATE" value="INTERMEDIATE" />
                                        <Picker.Item label="B.COM" value="B.COM" />
                                        <Picker.Item label="MBA" value="MBA" />

                                    </Picker>
                                </Item>
                            </Form>
                        </View>

                        <View style={styles.text1}>
                            <Text style={styles.text}>Enter Verify Email:</Text>
                            <TextInput

                                onChangeText={(val) => setVerify(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: 'blue', borderBottomWidth: 2, backgroundColor: "white", width: 300
                                }}
                                placeholder="Enter Email"
                            />
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Address :</Text>
                            <TextInput

                                onChangeText={(val) => setaddress(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: 'blue', borderBottomWidth: 2, backgroundColor: "white", width: 300
                                }}
                                placeholder="Enter Your Address"
                            />
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Experience :</Text>
                            <TextInput

                                onChangeText={(val) => setExperience(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: 'blue', borderBottomWidth: 2, backgroundColor: "white", width: 300
                                }}
                                placeholder="Your Experience"
                            />
                        </View>

                        <TouchableOpacity  onPress={Next}  >
                            <Text style={styles.btn1}>Next</Text>
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
        backgroundColor: "white",
        alignItems: "center",
    },
    tinyLogo: {
        width: 340,
        height: 200
    },
    text: {
        fontSize: 15
    },
    text1: {
        marginTop: 10
    },
    btn1: {
        marginTop: 40,
        backgroundColor: "blue",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    }
})