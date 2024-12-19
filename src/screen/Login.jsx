import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';
import {View, Text, Card, Button, Image, TextField} from 'react-native-ui-lib';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Login = () =>{

    return(
          <SafeAreaView style={{flex: 1}}>
            
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(30),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          width={170}
          height={170}
          source={{
            uri: 'https://images.pexels.com/photos/748837/pexels-photo-748837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
        />
      </View>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          heading
          style={{
            fontFamily: 'Poppins',
            fontSize: responsiveFontSize(4.5),
            fontWeight: 700,
            color: '#454545',
          }}>
          Please Login
        </Text>
      </View>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(20),
          backgroundColor: 'red',
        }}></View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(10),
        }}>
        <TextField
          placeholder={'Username or Email'}
          floatingPlaceholder
          onChangeText={text => console.log(text)}
          enableErrors
          validateOnChange
          validate={['required', value => value.length > 6]}
          validationMessage={['Field is required', 'Password is too short']}
          showCharCounter
          // leadingAccessory={<Icon name="search" size={20} color="gray" />} // Example icon
          // maxLength={30}
          style={{
            borderRadius: 25, // Round borders
            borderWidth: 1,
            borderColor: 'lightgray',
            paddingHorizontal: 10,
          }}
        />
      </View>
   
            </SafeAreaView>
    );
}

export default Login;