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
  ScrollView,
  View,
} from 'react-native';


import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGopay from './src/containers/organisms/HomeGopay';




const App: () => React$Node = () => {
  return (

    <View style={{ flex: 1 }}>
      {/* content */}
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* search bar */}
       <SearchFeature />
        {/* gopay */}
        <HomeGopay />
        {/* main feature */}
        <HomeMainFeature />
        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }} />
        {/* News Section  */}
          <GoNews />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Gofood Banner Section  */}
        <GoBanner />
        {/* Nearby Go-Food */}
       <ScrollableProducts />
      </ScrollView>
      {/* BOTTOM navigation */}
     <NavBar />
    </View>
  );
};


export default App;
