/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
          img={require('../../../assets/icon/home-active.png')}
          active
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('Orders')}
          title="Orders"
          img={require('../../../assets/icon/order.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Help"
          img={require('../../../assets/icon/help.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Inbox"
          img={require('../../../assets/icon/inbox.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Account"
          img={require('../../../assets/icon/account.png')}
        />
      </View>
    );
  }
}
//agar child class bisa melakukan navigasi, maka gunakan method withNavigation
export default withNavigation(NavBar);
