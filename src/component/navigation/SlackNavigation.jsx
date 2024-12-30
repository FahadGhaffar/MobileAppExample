import TabScreen from "./TabScreen"
import GetStarted from "../../screen/GetStarted"
import Login from "../../screen/Login"
import Signup from "../../screen/Signup"
import Todo from "../../screen/Todo"
import ChatScreen from "../../screen/ChatScreen"
import CustomHeader from "./CustomHeader"
import Service from "../../screen/Service"
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const SlackNavigation = () => {
    
      
   return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="home">
    <Stack.Screen
      options={({route}) => ({
        headerShown: false,
      })}
      name="getstarted"
      component={GetStarted}
    />
    <Stack.Screen
      options={({route}) => ({
        headerShown: false,
      })}
      name="login"
      component={Login}
    />
    <Stack.Screen
      options={({route}) => ({
        headerShown: false,
      })}
      name="signup"
      component={Signup}
    />
    <Stack.Screen
      options={({route}) => ({
        headerShown: false,
      })}
      name="home"
      component={TabScreen}
    />
    <Stack.Screen
      options={({route}) => ({
        headerShown: false,
      })}
      name="todo"
      component={Todo}
    />
    <Stack.Screen
    options={({route}) => ({
      headerShown: true,
           header: ({ navigation }) => (
          <CustomHeader 
            title="Custom Header"
            onBack={() => navigation.goBack()} 
          />
        ),
    })}

      name="chatScreen"
      component={ChatScreen}
    />
        <Stack.Screen
    options={({route}) => ({
      headerShown: true,
           header: ({ navigation }) => (
          <CustomHeader 
            title="Service"
            onBack={() => navigation.goBack()} 
          />
        ),
    })}

      name="service"
      component={Service}
    />
  </Stack.Navigator>
)
}


export default SlackNavigation