import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VrButton } from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <View
          style={{
            width: 2,
            height: 2,
            backgroundColor: '#FFF',
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }]
          }}
          // https://facebook.github.io/react-vr/docs/input.html
          onEnter={() => {
            console.log('onEnter');
          }}
          onExit={() => {
            console.log('onExit');
          }}
          onMove={event => {
            console.log('onMove', event.nativeEvent);
          }}
          onInput={event => {
            console.log('onInput type ', event.nativeEvent.inputEvent.type); // MouseInputEvent, KeyboardInputEvent, TouchInputEvent, GamepadInputEvent
            console.log('onInput     ', event.nativeEvent.inputEvent.eventType); // mousedown, mouseup, click || keyup, keydown, keypress
          }}
        />
        {/* <VrButton
          onClick={() => {
            console.log('clicked');
          }}
          onLongClick={() => {
            console.log('clicked long');
          }}
          onButtonPress={() => {
            console.log('press');
          }}
          onButtonRelease={() => {
            console.log('release');
          }}
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }]
          }}
          ignoreLongClick={false}
          // disabled
          // onEnter
          // onExit
        >
          <Text>Update</Text>
        </VrButton> */}
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
