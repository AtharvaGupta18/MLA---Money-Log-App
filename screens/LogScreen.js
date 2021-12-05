import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class LogScreen extends React.Component {
  render(){
    return(
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
              this.props.navigation.navigate('Home')
            }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Back</Text>
          </TouchableOpacity>
      </View>
    )
  }
}