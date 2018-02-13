import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  DirectionalLight,
  AmbientLight,
  Model
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Model
          // wireframe
          // lit
          source={{
            obj: asset('astronaut.obj')
            // mtl: asset('astronaut.mtl')
          }}
          style={{
            // color: 'orange',
            transform: [{ translate: [0, -1, -2] }]
          }}
          texture={asset('chess-world.jpg')}
        />
        <DirectionalLight style={{ transform: [{ translateX: -1000 }] }} />
        <AmbientLight intensity={0.4} />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
