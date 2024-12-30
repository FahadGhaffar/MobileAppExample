import React, {useState, useEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import {Icon, View, Text, Button} from 'react-native-ui-lib';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FlashList} from '@shopify/flash-list';
import {icons} from '../constants';
const Service = () => {
  let tempData = [
    {id: 1, title: 'first'},
    {id:2, title: 'first'},
    {id: 3, title: 'first'},
    {id: 4, title: 'first'},
    {id:5, title: 'first'},
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#161719',
          paddingHorizontal: 20,
          paddingVertical: 15,
       
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => console.log('back')}
          style={styles.backButton}>
          <Icon source={icons.lessSign} tintColor={'#ffffff'} size={20} />
        </TouchableOpacity>
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => console.log('cross')}
          style={styles.backButton}>
          <Icon source={icons.vectorArrow} tintColor={'#ffffff'} size={20} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#161719',
          flex: 1,
          paddingTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 600}}>
          Support Topics
        </Text>

        <FlashList
          data={tempData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          estimatedItemSize={50}
        />
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: 150,
          borderTopColor: '#1E1E20',
          backgroundColor: '#161719',
          borderTopWidth: 2,
        }}
        center>
        <Button
          label={'Emergency Roadside Help'}
          backgroundColor={'#2D2D2D'}
          color={'#ffffff'}
          borderRadius={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   backButton: {
//     marginRight: 10,
//   },
});
export default Service;
