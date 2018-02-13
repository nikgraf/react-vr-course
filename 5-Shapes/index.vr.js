import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Sphere,
  Cylinder,
  Plane,
  PointLight
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <PointLight
          intensity={1}
          style={{
            transform: [{ translate: [0, 700, 700] }]
          }}
        />
        {/* <Sphere
          // wireframe
          lit
          style={{
            color: 'lightblue',
            // opacity: 0.7,
            // transparent value discussed in docs & github issues??
            transform: [{ translate: [0, 0, -2] }]
          }}
          // radius={0.2}
          heightSegments={20}
          widthSegments={20}
          texture={asset('earth.jpg')}
        /> */}

        {/* <Box
          wireframe
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          style={{
            transform: [{ translate: [0, 0, -2] }]
          }}
        /> */}
        {/* <Cylinder
          wireframe
          radiusTop={0}
          radiusBottom={0.35}
          dimHeight={0.6}
          segments={4}
          style={{
            transform: [{ translate: [0, 0, -2] }]
          }}
        /> */}
        <Plane
          dimWidth={0.5}
          dimHeight={0.5}
          wireframe
          style={{
            transform: [{ translate: [0, 0, -2] }]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
