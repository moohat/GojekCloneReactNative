/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeature = props => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative'}}>
        <TextInput
          placeholder="what do you want to eat?"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={{position: 'absolute', top: 5, left: 5}}
        />
      </View>
      <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;
