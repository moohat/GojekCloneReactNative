import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  NewsDetail,
  Orders,
  OrderDetail,
  ScanQRCode,
} from '../../containers/pages';

const HomeStack = createStackNavigator(
  {
    // karena es6, Variable pemanggil dan Objek nya sama, maka bisa diperingkas
    //Home: {
    //   screen: Home,
    // },
    // NewsDetail: {
    //   screen: NewsDetail,
    // },
    Home,
    NewsDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const OrderStack = createStackNavigator(
  {
    Orders,
    OrderDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Orders',
  },
);

const ScanStack = createStackNavigator(
  {
    ScanQRCode,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ScanQRCode',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrderStack,
    ScanStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ScanStack',
  },
);

export default createAppContainer(Router);
