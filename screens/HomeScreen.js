import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView style={{ marginBottom: 5 }}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/BACKIMG.jpg')}>
            
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>MONEY LOG APP</Text>
            </View>

            <TouchableOpacity
              style={styles.routeCards}
              onPress={() => {
                this.props.navigation.navigate('Enter');
              }}>
              <Text style={styles.routeText}>Enter Today's Log</Text>
              <Text style={styles.bgDigit}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCards}
              onPress={() => {
                this.props.navigation.navigate('Log');
              }}>
              <Text style={styles.routeText}>See Last 30 Day Log</Text>
              <Text style={styles.bgDigit}>2</Text>
            </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop: 20
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  routeCards: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 50,
    marginTop: 80,
    borderRadius: 30,
    backgroundColor: 'brown',
    width: 300,
    height: 150
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 85,
    paddingLeft: 5
  },
  bgDigit: {
    position: 'absolute',
    fontSize: 150,
    right: 20,
    bottom: -15,
    color: 'rgba(183, 183, 183, 0.5)',
    zIndex: -1,
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800
  },
});