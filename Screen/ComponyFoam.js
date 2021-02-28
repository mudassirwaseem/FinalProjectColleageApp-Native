import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import firebase from "../Config/Firebase"

export default function ComponyFoam({navigation,route}){

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Dashboard")
                
            }
        });
    }, [])


  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setName] = useState("")
  const [location ,setlocation ] = useState("karachi")
  const [ industry,setindustry ] = useState("Node-JS")
  const [ experience,setexperience] = useState("")
  const [ Qualification,setQualification] = useState("")
  const [ contact,setcontact] = useState("")
  const [ type,setcompany] = useState("Company")


  const Register = ()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((compony) => {
        console.log(compony.uid)
        let val = {name,location,industry,experience,Qualification,contact,type}
        firebase.database().ref("compony").push(val)
        navigation.navigate("Dashboard")
            alert("Company Data Sent")

        })
        .catch((error) => {
            console.log(error)
            alert(error.message)
        });



}

    return(

<View  style={styles.container}>


<ScrollView>
            <View style={styles.container}>
                <View style={styles.container}>
                   
                    <Text style={{ fontSize: 20, marginTop: 20, color: "#1f1f14", fontWeight: "bold" }}>Fill Your Information</Text>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            onChangeText={(val) => setemail(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                borderColor: '#1f1f14' ,borderBottomWidth: 2, width: 300
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
                                borderColor: '#1f1f14' ,borderBottomWidth: 2, width: 300
                            }}
                            placeholder="Enter Password"
                        />
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Company:</Text>
                        <TextInput
                            onChangeText={(val) => setName(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                borderColor: '#1f1f14' ,borderBottomWidth: 2, width: 300
                            }}
                            placeholder="Company Name"
                        />
                    </View>
                    <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Location:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "red" }}
                                        placeholderIconColor="red"
                                        selectedValue={location}
                                        onValueChange={(value) => {
                                            setlocation(value)
                                        }}>


                                        <Picker.Item label="karachi" value="karachi" />
                                        <Picker.Item label="lahore" value="lahore" />
                                        <Picker.Item label="Multan" value="Multan" />
                                        <Picker.Item label="Peshawer" value="Peshawer" />
                                        <Picker.Item label="Sukkur" value="Sukkur" />

                                    </Picker>
                                </Item>
                            </Form>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Industry:</Text>

                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"

                                        style={{ width: 300, borderBottomWidth: 2, borderColor: 'blue' }}
                                        placeholderStyle={{ color: "#1f1f14" }}
                                        placeholderIconColor="#1f1f14"
                                        selectedValue={industry}
                                        onValueChange={(value) => {
                                            setindustry(value)
                                        }}>


                                        <Picker.Item label="IT" value="IT" />
                                        <Picker.Item label="Texation" value="Texation" />
                                        <Picker.Item label="Node-JS" value="Node-JS" />
                                        <Picker.Item label="Front-End-Dev" value="Front-End-Dev" />
                                        <Picker.Item label="Back-End-Dev" value="Back-End-Dev" />
                                        <Picker.Item label="Manufacturer" value="Manufacturer" />
                                       

                                    </Picker>
                                </Item>
                            </Form>
                        </View>
                 
                    <View style={styles.text1}>
                        <Text style={styles.text}>Experiance:</Text>
                        <TextInput

                            onChangeText={(val) => setexperience(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                borderColor: '#1f1f14' ,borderBottomWidth: 2,  width: 300
                            }}
                            placeholder="Experiance"
                        />
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Qualification:</Text>
                        <TextInput
                            
                            onChangeText={(val) => setQualification(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                borderColor: '#1f1f14',borderBottomWidth: 2,  width: 300
                            }}
                            placeholder="Qualification"
                        />
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Contact:</Text>
                        <TextInput
                        keyboardType="numeric"
                        onChangeText={(val) => setcontact(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                                borderColor: '#1f1f14' ,borderBottomWidth: 2, width: 300
                            }}
                            placeholder="Contact"
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