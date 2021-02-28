import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from "../Config/Firebase"
import { MaterialIcons } from '@expo/vector-icons';
import uuid from 'uuid'



export default function ImagePickerExample({navigation,route}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {value} = route.params
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  
  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4());
    const snapshot = await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL();
  }

  const uploadPic = async () => {
    setLoading(true)

    let imgURI = image
    
    // console.log(filename) 
    const uploadUrl = await uploadImageAsync(imgURI);
    var user = {...value, ...{'imgURI' : uploadUrl}}

    // var user = {value, ...{ uploadUrl}}
  firebase.database().ref('users').push(user);
  navigation.navigate("Dashboard")
    setLoading(false)
   
}

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  // const uploadPic = async () => {
  //  firebase.database().ref("userssssssss").push(image)
  // }

  
  return (
    <View style={styles.container}>
    {loading ? <ActivityIndicator size={50} animating={true} color="#d60505" style={styles.loading} /> : null }

    
    {/* -------- Image --------- */}
    <View style={{alignItems: 'center', position: 'relative'}}>
      {image ? <Image source={{ uri: image }} style={styles.Image} /> :
          <Image source={{ uri: 'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png' }} style={styles.Image} />
      }

    {/* ------------ Icons ------------ */}
      <TouchableOpacity
          activeOpacity={.6}
          onPress={pickImage}
          style={{position: 'absolute', bottom: 25}}
      >
          <MaterialIcons name="camera-enhance" size={40} color= 'purple' />
      </TouchableOpacity>
    </View>

      {/* Finish Button */}
    <View style={{paddingHorizontal: 20, marginTop: 60}}>  
      <Button 
              title="Finish"
              color="purple"
              onPress={uploadPic}
              disabled = {false}
      />
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LogoContainer:{
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  LogoImage: {
    height: 100,
    width: 100,
  },
  Image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 400,
    marginVertical: 40,
 },
 loading: {
  position: 'absolute',
  zIndex: 1,
  backgroundColor: 'white',
  opacity: 0.8,
  height: '100%',
  width: '100%'
}
});