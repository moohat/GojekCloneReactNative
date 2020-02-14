/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IconOrder from './icon/order.png';
import IconHome from './icon/home.png';


const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>

      {/* content */}
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        
      <Text>Gojek Clone App</Text>
      </View>

      {/* button navigation */}
      <View style={{ height: 54, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home-active.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color:'#43ab4a' }}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={IconOrder} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icon/help.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icon/inbox.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icon/account.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

});


export default App;
