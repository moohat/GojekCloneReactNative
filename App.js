/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
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
  Image,
  TextInput
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* searc bar */}
        <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>

          <View style={{ position: 'relative' }}>
            <TextInput placeholder='what do you want to eat?' style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
            <Image source={require('./icon/search.png')} style={{ position: 'absolute', top: 5, left: 5 }} />
          </View>
          <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./icon/promo.png')} />
          </View>
        </View>
        {/* gopay */}
        <View style={{ marginHorizontal: 17, marginTop: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB4', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
            <Image source={require('./icon/gopay.png')} />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Rp 50.000</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65b0', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./icon/pay.png')} />
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 }}>Pay</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./icon/nearby.png')} />
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 }}>Nearby</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./icon/topup.png')} />
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 }}>Topup</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./icon/more.png')} />
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 }}>More</Text>
            </View>
          </View>
        {/* main feature */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18, }}>
          <View style={{justifyContent:'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{ width: '25%', alignItems:'center'}}>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-ride.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Go-Ride</Text>
            </View>
            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-car.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-CAR</Text>
            </View>
            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-bluebird.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-BLUEBIRD</Text>
            </View>
            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-send.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-SEND</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection: 'row', width: '100%'}}>

            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-deals.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-DEALS</Text>
            </View>
            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-pulsa.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-PULSA</Text>
            </View>
            <View>
            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-food.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>GO-FOOD</Text>
            </View>
            <View>

            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', justifyContent:'center', borderRadius: 10, alignItem: 'center'  }}>
              <Image source={require('./icon/go-more.png')} />
            </View>
            <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>MORE</Text>
            </View>
          </View>
        </View>
        </View>


      </View>

      {/* button navigation */}
      <View style={{ height: 54, flexDirection: 'row', borderWidth: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home-active.png')} />
          <Text style={{ fontSize: 10, marginTop: 4, color: '#43ab4a' }}>Home</Text>
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
