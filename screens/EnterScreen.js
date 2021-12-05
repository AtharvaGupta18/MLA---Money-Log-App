import * as React from 'react';
import {Text, KeyboardAvoidingView, View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';

export default class EnterScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      item: '',
      itemPrice: '',
      bannerAdId: 'ca-app-pub-2898785365638881/3272030637',
      interstitialAdId: 'ca-app-pub-2898785365638881/5386417451',
    };
  }

  render(){
    return (
      <KeyboardAvoidingView
        style={{
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#A7F432',
        }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/EnterIMG.png')}
            style={{ width: 300, height: 250, marginTop: 30 }}
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Item"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Amount"
            keyboardType="numeric"
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
              backgroundColor: 'lightgreen',
            }}
            onPress={async () => {
              this.submit(this.state.item, this.state.itemPrice);
              AdMobInterstitial.setAdUnitID(this.state.interstitialAdId);
              await AdMobInterstitial.requestAdAsync({
                servePersonalizedAds: false,
              });
              await AdMobInterstitial.showAdAsync();
            }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
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
              this.props.navigation.navigate('Home')
            }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Back</Text>
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