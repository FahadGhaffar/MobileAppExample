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
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FlashList} from '@shopify/flash-list';
import {icons} from '../constants';
const Noise = () => {
  const navigation = useNavigation();
  let tempData = [
    {
      id: 1,
      title: 'Wind Noise',
      iconImage: `${icons.bag}`,
      screen: 'upgrades',
    },
    {
      id: 2,
      title: 'Rattle or Squeak',
      iconImage: `${icons.carExterior}`,
      screen: 'upgrades',
    },
    {
      id: 3,
      title: 'Suspension Noise',
      iconImage: `${icons.carInterior}`,
      screen: 'upgrades',
    },
    {
      id: 4,
      title: 'Other - Noise & Vibration ',
      iconImage: `${icons.carRepair}`,
      screen: 'upgrades',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.screen);
        }}
        activeOpacity={0.7}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#161719',
            paddingVertical: 12,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log('cross')}
            style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <Text style={{color: '#8B8B8D'}}>1</Text>
            <Icon source={icons.greaterThan} tintColor={'#8B8B8D'} size={9} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#161719',
          flex: 1,
          paddingTop: 25,
          paddingHorizontal: 20,
        }}>
        <Text>
          <Text
            style={{
              color: '#878789',
              fontSize: 13,

              paddingBottom: 10,
            }}>
            There are some sounds your vehicle makes as part of its normal daily
            operation and are not a cause for concern. {'\u00A0'}
          </Text>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 13,
              textDecorationLine: 'underline',

              paddingBottom: 10,
            }}>
            Learn More
          </Text>
        </Text>
        <FlashList
          data={tempData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          estimatedItemSize={50}
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
export default Noise;
