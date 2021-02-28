import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import firebase from '../Config/Firebase'



export default function SignUpMain({ navigation, route }) {

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Dashboard")
            }
        });
    }, [])

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Name, setName] = useState("")
    const [gender, setgender] = useState("Male")
    const [Qualification, setQualification] = useState("BSC")
    const [age, setage] = useState("")
    const [address, setaddress] = useState("")
    const [Experience, setExperience] = useState("Fresher")
    const [contact, setcontact] = useState("")
    const [type, settype] = useState("Student")


    const Register = ()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userr) => {
            let val = {Name,gender,Qualification,age,address,Experience,contact,type}
            firebase.database().ref("user").push(val)
            navigation.navigate("Dashboard")
                alert("User Sign In")

            })
            .catch((error) => {
                console.log(error)
                alert(error.message)
            });



    }
    return (

        <View style={styles.container}>


            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container}>

                        <Text style={{ fontSize: 20, marginTop: 20, color: "#1f1f14", fontWeight: "bold" }}>Fill your Information!!</Text>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Email:</Text>
                            <TextInput
                                onChangeText={(val) => setemail(val)}
                                style={{
                                    height: 30, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
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
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
                                }}
                                placeholder="Enter Password"
                            />
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Age:</Text>
                            <TextInput
                        keyboardType="numeric"
                                onChangeText={(val) => setage(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
                                }}
                                placeholder="Enter Your Age"
                            />
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Name:</Text>
                            <TextInput

                                onChangeText={(val) => setName(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
                                }}
                                placeholder="Enter Your Name"
                            />
                        </View>
                       

                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Gender:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "#1f1f14" }}
                                        placeholderIconColor="#1f1f14"
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


                        <View style={styles.text1}>
                            <Text style={styles.text}>Address :</Text>
                            <TextInput

                                onChangeText={(val) => setaddress(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
                                }}
                                placeholder="Enter Your Address"
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Qualification:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "#1f1f14" }}
                                        placeholderIconColor="#1f1f14"
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

                      
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Experience:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "#1f1f14" }}
                                        placeholderIconColor="#1f1f14"
                                        selectedValue={Experience}
                                        onValueChange={(value) => {
                                            setExperience(value)
                                        }}>


                                        <Picker.Item label="Fresher" value="Fresher" />
                                        <Picker.Item label="1 Year" value="1 Year" />
                                        <Picker.Item label="2 Year" value="2 Year" />
                                        <Picker.Item label="3 Year" value="3 Year" />
                                        <Picker.Item label="4 Year" value="4 Year" />
                                        <Picker.Item label="5 Year" value="5 Year" />
                                       

                                    </Picker>
                                </Item>
                            </Form>
                        </View>
                        <View style={styles.text1}>
                            <Text style={styles.text}>Contact :</Text>
                            <TextInput
                             keyboardType="numeric"

                                onChangeText={(val) => setcontact(val)}
                                style={{
                                    height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                    borderColor: '#1f1f14', borderBottomWidth: 2,  width: 300
                                }}
                                placeholder="Your Contact Num"
                            />
                        </View>

                        <TouchableOpacity  onPress={Register}  >
                            <Text style={styles.btn1}>Register</Text>
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
        backgroundColor: "#ebebe0",
        alignItems: "center",
        color:"#1f1f14"
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
        backgroundColor: "#1f1f14",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    }
})