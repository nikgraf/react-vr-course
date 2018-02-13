import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('equirectangular.png')} />
        {/* <Pano
          source={[
            asset('right.png'),
            asset('left.png'),
            asset('up.png'),
            asset('down.png'),
            asset('back.png'),
            asset('front.png')
          ]}
        /> */}
        {/* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          hello
        </Text> */}
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
