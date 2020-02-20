/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// using functional component
const GopayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: 'bold',
            marginTop: 15,
            textAlign: 'center'
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//using class component
// class GopayFeature extends Component{
//   render(){
//     return(
//       <View style={{ flex: 1, alignItems: 'center' }}>
//     <Image source={this.props.img} />
//     <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 }}>{this.props.title}</Text>
//   </View>
//     )
//   }
// }

export default GopayFeature;
