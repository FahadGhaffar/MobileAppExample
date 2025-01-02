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
const Service = () => {
  const navigation = useNavigation();
  let tempData = [
    {
      id: 1,
      title: 'Upgrades & Accessories (1)',
      iconImage: `${icons.bag}`,
      screen: 'upgrades',
    },
    {
      id: 2,
      title: 'Exterior',
      iconImage: `${icons.carExterior}`,
      screen: 'upgrades',
    },
    {
      id: 3,
      title: 'Interior',
      iconImage: `${icons.carInterior}`,
      screen: 'upgrades',
    },
    {
      id: 4,
      title: 'Collision & Glass',
      iconImage: `${icons.carRepair}`,
      screen: 'upgrades',
    },
    {
      id: 5,
      title: 'Noise & Vibration',
      iconImage: `${icons.carNoise}`,
      screen: 'noise',
    },
    {
      id: 6,
      title: 'Tires & Wheels',
      iconImage: `${icons.tire}`,
      screen: 'upgrades',
    },
    {
      id: 7,
      title: 'Battery & Charging',
      iconImage: `${icons.plugin}`,
      screen: 'upgrades',
    },
    {
      id: 8,
      title: 'Software & Autopilot',
      iconImage: `${icons.tablet}`,
      screen: 'upgrades',
    },
    {id: 9, title: 'Other', iconImage: `${icons.question}`, screen: 'upgrades'},
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
            <TouchableOpacity
              onPress={() => console.log('back')}
              style={styles.backButton}>
              <Icon source={item.iconImage} tintColor={'#ffffff'} size={20} />
            </TouchableOpacity>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log('cross')}
            style={styles.backButton}>
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
        <Text
          style={{
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 600,
            paddingBottom: 10,
          }}>
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
          height: 120,
          borderTopColor: '#1E1E20',
          backgroundColor: '#161719',
          borderTopWidth: 3,
        }}
        center>
        <Button
          label={'Emergency Roadside Help'}
          backgroundColor={'#2D2D2D'}
          color={'#ffffff'}
          borderRadius={10}
          style={{width: responsiveWidth(85), height: responsiveHeight(8)}}
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
