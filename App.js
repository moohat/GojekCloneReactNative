/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';



const App: () => React$Node = () => {
  return (

    <View style={{ flex: 1 }}>
      {/* content */}
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* search bar */}
        <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>

          <View style={{ position: 'relative' }}>
            <TextInput placeholder="what do you want to eat?" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
            <Image source={require('./src/assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 5 }} />
          </View>
          <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./src/assets/icon/promo.png')} />
          </View>
        </View>
        {/* gopay */}
        <View style={{ marginHorizontal: 17, marginTop: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB4', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
            <Image source={require('./src/assets/icon/gopay.png')} />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Rp 50.000</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65b0', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>

            <GopayFeature title="Pay"   img={require('./src/assets/icon/pay.png')}/>
            <GopayFeature title="Nearby"  img={require('./src/assets/icon/nearby.png')}/>
            <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')}/>
            <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
          </View>
        </View>
        {/* main feature */}
        <View style={{ marginHorizontal: 17, flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>

            <MainFeature  title="Go-Ride" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature  title="Go-Car" img={require('./src/assets/icon/go-car.png')} />
            <MainFeature  title="Go-BLUEBIRD" img={require('./src/assets/icon/go-bluebird.png')} />
            <MainFeature  title="Go-SEND" img={require('./src/assets/icon/go-send.png')} />
            <MainFeature  title="Go-DEALS" img={require('./src/assets/icon/go-deals.png')} />
            <MainFeature  title="Go-PULSA" img={require('./src/assets/icon/go-pulsa.png')} />
            <MainFeature  title="Go-FOOD" img={require('./src/assets/icon/go-food.png')} />
            <MainFeature  title="MORE" img={require('./src/assets/icon/go-more.png')} />

          </View>
        </View>
        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }} />

        {/* News Section  */}
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
          <View style={{ position: 'relative' }}>
            <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
              <Image source={require('./src/assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />

            </View>
          </View>
          <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c1c1c' }}>Go-NEWS</Text>
            <Text style={{ fontSize: 14, color: '#7a7a7a', marginBottom: 11 }}>dia bukan evan dimas</Text>
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Internal Information Section */}
        <View style={{ padding: 16, paddingBottom: 0 }}>
          <View style={{ height: 15, width: 60, marginLeft: -4 }}>
            <Image source={require('./src/assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
          </View>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <View>
              <Image source={require('./src/assets/dummy/facebook-connect.png')} />
            </View>
            <View style={{ marginLeft: 16, flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a' }}>Connect with facebook</Text>
              <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a' }}>Login faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Connect</Text>
          </TouchableOpacity>
          <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }} />
        </View>

        {/* Gofood Banner Section  */}
        <View style={{ padding: 16 }}>
          <View style={{ position: 'relative' }}>
            <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
              <Image source={require('./src/assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', paddingBottom: 16, paddingHorizontal: 2, flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free Go-FOOD Voucher</Text>
                <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Quick, beofre the run out!</Text>
              </View>
              <View style={{ flex: 1, paddingLeft: 12 }}>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }} />
        </View>

        {/* Nearby Go-Food */}
        <View >

          <View style={{ height: 15, width: 60, marginLeft: 16 }}>
            <Image source={require('./src/assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Nearby Restaurant</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61a756' }}>See All</Text>
          </View>
          <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 16 }}>KFC Aeon Mall</Text>
            </View>

            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 16 }}>Bakmie GM</Text>
            </View>

            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 16 }}>Martabak Orins</Text>
            </View>

            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 16 }}>Martabak Banka</Text>
            </View>

            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 16 }}>Ayam Bakar pa Bos</Text>
            </View>
          </ScrollView>
          <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16, marginBottom: 20 }} />
        </View>




      </ScrollView>

      {/* BOTTOM navigation */}
      <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/home-active.png')} />
          <Text style={{ fontSize: 10, marginTop: 4, color: '#43ab4a' }}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/order.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/help.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/inbox.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./src/assets/icon/account.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

});


export default App;
