import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from 'firebase';
import { db } from '../config';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      bannerAdId: 'ca-app-pub-2898785365638881/5151901824',
      interstitialAdId: 'ca-app-pub-2898785365638881/4195959095',
    };
  }

  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log(response);
        if (response) {
          this.props.navigation.navigate('WriteStory');
        }
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert('User Does Not Exists');
            console.log('doesnotexists');
            break;
          case 'auth/invalid-email':
            Alert.alert('Incorrect Email or Password');
            console.log('invalid');
            break;
          case 'auth/wrong-password':
            Alert.alert('Incorrect Email or Password');
            console.log('invalid');
            break;
        }
      }
    } else {
      Alert.alert('Enter Email And Password');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#3C6382',
        }}>
        <View>
          <Header
            backgroundColor={'#3C6382'}
            centerComponent={{
              text: 'Story Hub',
              style: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          {/* <Image
            source={require('../assets/story.png')}
            style={{ width: 300, height: 250 }}
          /> */}
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Enter passsword"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 45,
              width: 100,
              borderWidth: 1,
              paddingTop: 5,
              borderRadius: 7,
              marginTop: 20,
              marginBottom: 235,
              backgroundColor: 'lightgreen',
            }}
            onPress={async () => {
              this.login(this.state.emailId, this.state.password);
              AdMobInterstitial.setAdUnitID(this.state.interstitialAdId);
              await AdMobInterstitial.requestAdAsync({
                servePersonalizedAds: false,
              });
              await AdMobInterstitial.showAdAsync();
            }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Login</Text>
            <Text
              style={{
                marginRight: -150,
                fontSize: 28,
                marginTop: 30,
                color: 'white',
              }}>
              - Made By Atharva
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 2.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    marginTop: 30,
  },
});