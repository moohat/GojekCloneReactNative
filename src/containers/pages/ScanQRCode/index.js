import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const IconWithText = props => {
  return (
    <View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'green',
          borderRadius: 60,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center', marginTop: 10}}>
        {props.title}
      </Text>
    </View>
  );
};

const IconAction = () => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 35,
      }}
    />
  );
};

class ScanQRCode extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'grey'}}>
        <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            left: 0}}

              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                console.log(barcodes);
              }}
            />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginTop: 16,
              justifyContent: 'space-between',
              position: 'absolute', top: 0, left: 0
            }}>
            
            <IconAction />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 80,
              }}>
              <IconAction />
              <IconAction />
            </View>
            
          </View>
        </View>
        <View
          style={{
            height: 250,
            backgroundColor: 'white',
            paddingHorizontal: 16,
          }}>
          <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
            <View
              style={{
                width: 40,
                height: 4,
                backgroundColor: '#e0e0e0',
                marginVertical: 2,
              }}
            />
            <View
              style={{
                width: 40,
                height: 4,
                backgroundColor: '#e0e0e0',
                marginVertical: 2,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
              More Options
            </Text>
            <Text style={{fontSize: 14, color: '#61a756', fontWeight: ' bold'}}>
              SHORTCUT
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: 14,
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: 160,
                justifyContent: 'space-between',
                paddingRight: 12,
              }}>
              <IconWithText title="Phone Number" />
              <IconWithText title="Gopay Code" />
            </View>
            <View style={{width: 1, height: 60, backgroundColor: 'grey'}} />
            <View style={{flex: 1, paddingLeft: 12}}>
              <Text>Your recent Gopay receive now</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ScanQRCode;
