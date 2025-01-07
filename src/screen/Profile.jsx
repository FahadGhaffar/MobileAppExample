
import React, {useState, useEffect} from 'react';
import { View,Text,Button } from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
  return(<View style={{flex:1,gap:5}} center >
   
    <Button label={'Redex'} size={Button.sizes.large} backgroundColor={"red"} onPress={()=>{ navigation.navigate('redexAdd')
    }}/>
    <Button label={'Firebase'} size={Button.sizes.large} backgroundColor={"red"} onPress={()=>{navigation.navigate('login')}} />
    <Button label={'Local'} size={Button.sizes.large} backgroundColor={"red"} onPress={()=>{console.log("Local");}}/>
    

  </View>)
}

export default Profile