import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Image } from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <View
          style={{
            width: 2,
            height: 2.4,
            backgroundColor: '#FFF',
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }],
            justifyContent: 'space-between'
          }}
        >
          <Image
            source={{ uri: '/static_assets/mountains.jpg' }}
            style={{
              height: 1.2
            }}
          />
          <Text
            style={{
              color: '#333',
              fontSize: 0.16,
              textAlign: 'center'
            }}
          >
            Explore Austria with its wonderful ski resorts.
          </Text>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Image
              source={{ uri: '/static_assets/thumb1.jpg' }}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image
              source={{ uri: '/static_assets/thumb2.jpg' }}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image
              source={{ uri: '/static_assets/thumb3.jpg' }}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image
              source={{ uri: '/static_assets/thumb4.jpg' }}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
