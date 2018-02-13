import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Box,
  Plane,
  Cylinder,
  AmbientLight,
  SpotLight,
  PointLight,
  DirectionalLight
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <AmbientLight intensity={2} style={{ color: 'brown' }} /> */}
        {/* <DirectionalLight
          style={{
            transform: [{ translate: [-1000, 0, 0] }]
          }}
          intensity={0.5}
        /> */}
        {/* <PointLight
          style={{
            transform: [{ translate: [0, 0, -5] }]
          }}
          distance={2}
          decay={2}
        /> */}
        <SpotLight
          // penumbra={80}
          // angle={0.85}
          style={{
            transform: [{ translate: [0, 0, -5] }]
          }}
        />
        <Sphere
          lit
          style={{
            color: 'yellow',
            transform: [{ translate: [-1.5, 0, -4] }]
          }}
          widthSegments={20}
          heightSegments={20}
        />
        <Box
          lit
          style={{
            color: 'blue',
            transform: [{ translate: [0, 0, -6] }]
          }}
        />
        <Cylinder
          lit
          radiusTop={0}
          segments={20}
          style={{
            color: 'red',
            transform: [{ translate: [1.5, 0, -4] }]
          }}
        />
        <Plane
          lit
          dimWidth={4}
          dimHeight={4}
          style={{
            color: 'green',
            transform: [{ translate: [0, -0.5, -5] }, { rotateX: -90 }]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
