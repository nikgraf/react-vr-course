import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Animated,
  Box,
  DirectionalLight
} from 'react-vr';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
      springValue: new Animated.Value(-1),
      decayValue: new Animated.Value(-3.5),
      boxRotation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    // Animated.timing(
    //   // Uses easing functions
    //   this.state.fadeIn, // The value to drive
    //   { toValue: 1, duration: 3000 } // Configuration
    // ).start(); // Don't forget start!
    // Animated.spring(this.state.springValue, {
    //   toValue: 0,
    //   tension: 1,
    //   friction: 2
    // }).start();
    // Animated.decay(this.state.decayValue, {
    //   velocity: 0.01,
    //   deceleration: 0.9985
    // }).start();
    Animated.sequence([
      Animated.timing(this.state.fadeIn, { toValue: 1, duration: 3000 }),
      Animated.delay(1000),
      Animated.spring(this.state.springValue, {
        toValue: 0,
        tension: 1,
        friction: 2
      })
    ]).start();

    Animated.timing(this.state.boxRotation, {
      duration: 10000,
      toValue: 930
    }).start();
  }

  render() {
    return (
      <View>
        {/* <Animated.View
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [0, 0, -1] }
              // { scale: this.state.springValue }
            ],
            height: 0.25,
            width: 0.25,
            backgroundColor: '#335',
            opacity: this.state.fadeIn
          }}
        >
          <Text>hello</Text>
        </Animated.View> */}

        {/* <Animated.Text
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [0, 0, -1] },
              { scale: this.state.springValue }
              // { rotateZ: this.state.springValue }
            ]
          }}
        >
          hello
        </Animated.Text> */}

        {/* parallel/sequence example */}
        <Animated.Image
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: -1 },
              { translateY: this.state.springValue }
              // { translateY: this.state.decayValue }
            ],
            height: 0.5,
            width: 0.5,
            opacity: this.state.fadeIn
          }}
          source={asset('mountain.jpg')}
        />
        <DirectionalLight
          style={{
            transform: [{ translate: [-200, 700, 0] }]
          }}
        />
        <AnimatedBox
          lit
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          style={{
            transform: [
              { translate: [0, 0, -10] },
              { rotateY: this.state.boxRotation },
              { rotateX: -40 }
            ]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
