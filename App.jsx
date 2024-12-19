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

import {
 
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
import GetStarted from './src/screen/GetStarted'
import Login from './src/screen/Login'
import Profile from './src/screen/Profile'
import Signup from './src/screen/Signup'
import Cart from './src/screen/Cart'
import Home from './src/screen/Home' 
// import homeicon from './scr/assest/icon/homeicon.png'

import {  icons } from './src/constants/index.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#454545',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});
// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View style={styles.tabBarContainer}>
//       <View style={styles.tabBar}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || route.name;

//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };

//           // Define icons based on the route name
//           let iconName;
//           if (route.name === 'cart') iconName = 'home';
//           if (route.name === 'home') iconName = 'calendar';
//           if (route.name === 'profile') iconName = 'settings';
//           if (route.name === 'cart1') iconName = 'user';

//           return (
//             <TouchableOpacity
//               key={index}
//               onPress={onPress}
//               style={styles.tabButton}
//             >
//               <Icon
//                 name={iconName}
//                 size={24}
//                 color={isFocused ? 'white' : '#aaaaaa'}
//                 source={icons.vectorArrow}
//               />
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {/* Black Rounded Tab Bar */}
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Icons based on route name
          let iconName;
          if (route.name === 'home') iconName = icons.calender;
          if (route.name === 'profile') iconName = icons.home;
          if (route.name === 'cart') iconName = icons.setting;

          const onPress = () => navigation.navigate(route.name);

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}
            >
              <Icon
                source={iconName}
                size={24}
                color={isFocused ? Colors.white : Colors.grey60}
              />
            </TouchableOpacity>
          );
        })}
      </View>

       {/* Floating Button */}
       <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('cart1')}
      >
        <Icon name="headphones" source={icons.call} size={24} color={Colors.blue30} />
      </TouchableOpacity>
    </View>
  );
};
function TabScreen() {
  return (
    <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{
      // tabBarStyle: styles.tabBar, 
    
      tabBarShowLabel: false, // Hides labels
      headerShown: false, // No header
    }}
    initialRouteName={'home'}
  >
    <Tab.Screen
     
      options={({ route }) => ({
        // tabBarIcon: ({ focused }) => (
        //   <View style={focused ? styles.focusedTab : styles.tabButton}>
        //     <Icon assetName="home" source={icons.vectorArrow} size={24} tintColor={focused ? Colors.white : Colors.grey40} />
        //   </View>
        // ),
        headerShown: false,
      })}
      name="cart"
      component={Cart}
    />

    <Tab.Screen
      options={({ route }) => ({
        tabBarShowLabel: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   return (
        //     <View style={focused ? styles.focusedTab : styles.tabButton}>
        //     <Icon assetName="calendar" source={icons.vectorArrow} size={24} tintColor={focused ? Colors.white : Colors.grey40} />
        //   </View>
        //   );
        // },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
      name="home"
      component={Home}
    />
    <Tab.Screen
      options={props => ({
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   return (
        //     <View style={focused ? styles.focusedTab : styles.tabButton}>
        //     <Icon assetName="user" source={icons.vectorArrow} size={24} tintColor={focused ? Colors.white : Colors.grey40} />
        //   </View>
        //   )
        // },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
      name="profile"
      component={Profile}
    />


  </Tab.Navigator>

    // <Tab.Navigator
 
    //   screenOptions={{
  
    //     tabBarShowLabel: false,
    //     headerShown: false,
    //   }}
    //   initialRouteName={'home'}
    // >
    //   <Tab.Screen
    //     options={({ route }) => ({

    //       tabBarIcon: ({ focused, color, size }) => {

    //         return <Image
    //           style={{
    //             width: 25,
    //             height: 25,
    //           }}
    //           source={icons.homeicon}
    //         />;
    //       },
    //       tabBarActiveTintColor: 'orange',
    //       tabBarInactiveTintColor: 'gray',
    //       headerShown: false,
    //     })}
    //     name="cart"
    //     component={Cart}
    //   />

      // <Tab.Screen
      //   options={({ route }) => ({
      //     tabBarShowLabel: false,
      //     tabBarIcon: ({ focused, color, size }) => {
      //       return (
      //         <View
      //           style={{
      //             backgroundColor: '#f1f1f1',
      //             padding: 10,
      //             marginTop: -50,
      //             borderRadius: 20,
      //           }}>
      //           <View
      //             style={{
      //               width: 50,
      //               height: 50,
      //               borderRadius: 25,
      //               backgroundColor: '#fff',
      //               shadowColor: '#000',
      //               shadowOffset: {
      //                 width: 0,
      //                 height: 2,
      //               },
      //               shadowOpacity: 0.25,
      //               shadowRadius: 3.84,
      //               elevation: 5,
      //               justifyContent: 'center',
      //               alignItems: 'center',
      //             }}>
      //             <Text>
      //               <Image
      //                 style={{
      //                   width: 25,
      //                   height: 25,
      //                   marginTop: -30,
      //                 }}
      //                 source={icons.homeicon}
      //               />;
      //             </Text>
      //           </View>
      //         </View>
      //       );
      //     },
      //     tabBarActiveTintColor: 'orange',
      //     tabBarInactiveTintColor: 'gray',
      //   })}
      //   name="home"
      //   component={Home}
      // />
    //   <Tab.Screen
    //     options={props => ({
    //       headerShown: false,
    //       tabBarIcon: ({ focused, color, size }) => {
    //         return <Image
    //           style={{
    //             width: 25,
    //             height: 25,
    //           }}
    //           source={icons.homeicon}
    //         />;
    //       },
    //       tabBarActiveTintColor: 'orange',
    //       tabBarInactiveTintColor: 'gray',
    //     })}
    //     name="profile"
    //     component={Profile}
    //   />

    // </Tab.Navigator>
  );
}

function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerShown: false,
      }} initialRouteName='login'>
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="getstarted" component={GetStarted} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="login" component={Login} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="signup" component={Signup} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="home" component={TabScreen} />
         <Stack.Screen options={({ route }) => ({

headerShown: false
})} name="cart1" component={Cart} />
      
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20,
    marginLeft:20
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 30,
    width: responsiveWidth(60),
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  floatingButton: {
    position: 'absolute',
    // bottom: 35,
    right: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    borderColor: 'blue',
    borderWidth: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
