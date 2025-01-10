import {Text} from 'react-native-ui-lib';
import ReduxAdd from '../../screen/ReduxAdd';
import ReduxAddFavorite from '../../screen/ReduxAddFavorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
function ReduxTabBar() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName={'reduxAdd'}>
      <Tab.Screen
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Text>Add</Text>;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
        name="reduxAdd"
        component={ReduxAdd}
      />

      <Tab.Screen
        options={props => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Text>Favoriod</Text>;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
        name="reduxAddFavorite"
        component={ReduxAddFavorite}
      />
    </Tab.Navigator>
  );
}

export default ReduxTabBar;
