/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: 17,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <MainFeature
            title="Go-Ride"
            img={require('../../../assets/icon/go-ride.png')}
          />
          <MainFeature
            title="Go-Car"
            img={require('../../../assets/icon/go-car.png')}
          />
          <MainFeature
            title="Go-BLUEBIRD"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFeature
            title="Go-SEND"
            img={require('../../../assets/icon/go-send.png')}
          />
          <MainFeature
            title="Go-DEALS"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <MainFeature
            title="Go-PULSA"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFeature
            title="Go-FOOD"
            img={require('../../../assets/icon/go-food.png')}
          />
          <MainFeature
            title="MORE"
            img={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
