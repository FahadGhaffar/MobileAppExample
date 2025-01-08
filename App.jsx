/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';

// import {
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {
  View,
  Text,
  Card,
  Button,
  Colors,
  Typography,
  Spacings,
  Carousel,
  Icon,
  Assets,
} from 'react-native-ui-lib';

import SlackNavigation from './src/component/navigation/SlackNavigation.jsx';
import { Provider } from 'react-redux'
import myStore from './src/redux/myStore.js';
import {NavigationContainer} from '@react-navigation/native';



Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#454545',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});




function App() {
  return (
    <Provider store={myStore}>
    <NavigationContainer>

      <SlackNavigation/>
    </NavigationContainer>

    </Provider>
  );
}



export default App;
