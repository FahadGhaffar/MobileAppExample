import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar'

import Cart from '../../screen/Cart';
import Home from '../../screen/Home';
import Profile from '../../screen/Profile';
import ChatScreen from '../../screen/ChatScreen';

const Tab = createBottomTabNavigator();




function TabScreen() {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
         
  
          tabBarShowLabel: false,
          headerShown: false,
        }}
        initialRouteName={'home'}>
        <Tab.Screen
          options={({route}) => ({
  
            headerShown: false,
          })}
          name="chatScreen"
          component={ChatScreen}
        />
  
        <Tab.Screen
          options={({route}) => ({
            tabBarShowLabel: false,
  
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          })}
          name="home"
          component={Home}
        />
        <Tab.Screen
          options={props => ({
            headerShown: false,
  
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          })}
          name="profile"
          component={Profile}
        />
      </Tab.Navigator>
    );
  }



  export default TabScreen;