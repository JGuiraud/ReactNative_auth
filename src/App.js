import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
   componentWillMount() {
      firebase.initializeApp({
         apiKey: "AIzaSyCLB2PNgb3jbkOFg1Ry_7T5it5QU8_LSrI",
         authDomain: "authentification-747c3.firebaseapp.com",
         databaseURL: "https://authentification-747c3.firebaseio.com",
         projectId: "authentification-747c3",
         storageBucket: "authentification-747c3.appspot.com",
         messagingSenderId: "500957925671"
      });
   }

   render() {
      return (
         <View>
            <Header headerText='Authentication' />
            <Text>plop</Text>
         </View>
      );
   }
}

export default App;