import React, {useRef, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Animated,
  Alert,
  ImageBackground,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
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

import _ from 'lodash';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {icons, images} from '../constants';

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#454545',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});

//   Typography.loadTypographies({
//     heading: {fontSize: 36, fontWeight: '600'},
//     subheading: {fontSize: 28, fontWeight: '500'},
//     body: {fontSize: 18, fontWeight: '400'}
//   });

// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity
//             style={{
//                 padding: SIZES.padding,
//                 paddingBottom: SIZES.padding * 2,
//                 backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
//                 borderRadius: SIZES.radius,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginRight: SIZES.padding,
//                 ...styles.shadow
//             }}
//             onPress={() => onSelectCategory(item)}
//         >
//             <View
//                 style={{
//                     width: 50,
//                     height: 50,
//                     borderRadius: 25,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
//                 }}
//             >
//                 <Image
//                     source={item.icon}
//                     resizeMode="contain"
//                     style={{
//                         width: 30,
//                         height: 30
//                     }}
//                 />
//             </View>

//             <Text
//                 style={{
//                     marginTop: SIZES.padding,
//                     color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
//                     ...FONTS.body5
//                 }}
//             >
//                 {item.name}
//             </Text>
//         </TouchableOpacity>
//     )
// }
const DATA = [
  {id: 1, title: 'Brake and brake Fluid', images: `${images.brake}`},
  {id: 2, title: 'Batteries', images: `${images.batteries}`},
  {id: 3, title: 'Brake and brake Fluid', images: `${images.brake}`},
  {id: 4, title: 'Batteries', images: `${images.batteries}`},
  {id: 5, title: 'Brake and brake Fluid', images: `${images.brake}`},
  {id: 6, title: 'Batteries', images: `${images.batteries}`},
  //   {id:7,
  //     title: 'First Item',
  //   },
  //   {id:8,
  //     title: 'Second Item',
  //   },
];
const renderItem = ({item}) => {
  return (
    <Card
      // padding-30
      width={responsiveWidth(45)}
      height={200}
      style={{backgroundColor: '#929292', marginHorizontal: 10}}
      onPress={() => console.log('pressed')}>
      <View
        style={{
          width: responsiveWidth(45),
          height: responsiveWidth(11),

          paddingTop: 5,
          paddingLeft: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
        }}>
        <Text style={{width: 130, height: 40}} color={'#282828'}>
          {item.title}
        </Text>

        <View style={{paddingTop: 10, paddingRight: 8}}>
          <Icon
            source={icons.vectorArrow}
            tintColor={'#282828'}
            style={{fontSize: 10}}
          />
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(45),
          height: 100,
          //   backgroundColor:'#92929233',

          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card.Image
          width={120}
          height={70}
          // source={{
          //   uri: `${item.images}?auto=compress&cs=tinysrgb&dpr=1&w=200`,
          // }}
          source={item.images}
        />
      </View>
      <View
        style={{
          width: responsiveWidth(45),
          height: 40,
          //   backgroundColor: 'orange',
          paddingLeft: 30,
          // paddingBottom: 5,
          // paddingTop: 5,
          marginTop: 5,
          paddingRight: 30,
        }}>
        <Button
          label={'Select'}
          size={Button.sizes.small}
          backgroundColor={Colors.white}
          color={Colors.black}
          labelStyle={{fontSize: 13}}
          onPress={() => {
            Alert.alert(item.title);
          }}
        />
      </View>
    </Card>
  );
};
const DotPagination = ({scrollX}) => {
  const totalDots = Math.ceil(DATA.length / 2); // Total dots based on pairs of items

  return (
    <View style={styles.dotsContainer}>
      {Array.from({length: totalDots}).map((_, index) => {
        const dotStyle = {
          backgroundColor: scrollX.interpolate({
            inputRange: [
              (index - 1) * 600, // Adjust for two items per dot (300 width each)
              index * 600,
              (index + 1) * 600,
            ],
            outputRange: ['#454545', '#1A45EB', '#454545'], // Inactive to active color
            extrapolate: 'clamp',
          }),
        };
        return <Animated.View key={index} style={[styles.dot, dotStyle]} />;
      })}
    </View>
  );
};
Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

const Home = () => {
  const BACKGROUND_COLORS = [
    Colors.red50,
    Colors.yellow20,
    Colors.purple50,
    Colors.green50,
    Colors.cyan50,
    Colors.purple20,
    Colors.blue60,
    Colors.red10,
    Colors.green20,
    Colors.purple60,
  ];

  const Page = ({children, style, ...others}) => {
    return (
      <View
        {...others}
        style={[{flex: 1, borderWidth: 1, borderRadius: 8}, style]}>
        {children}
      </View>
    );
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.reserve}>
        <Text heading>Reserve section</Text>
      </View>
      <View style={styles.serviceRow}>
        <Text heading color={Colors.textColor} style={styles.serviceText}>
          Services
        </Text>
      </View>
      <View style={styles.serviceSlider}>
        <FlashList
          horizontal
          data={DATA}
          //   renderItem={({item}) => <Text>{item.title}</Text>}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={responsiveHeight(25)}
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
        <DotPagination scrollX={scrollX} data={DATA} />
      </View>

      <View
        style={{
          height: responsiveHeight(6),
          width: responsiveWidth(100),
          marginTop: 25,
          // backgroundColor:'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          label={'View All'}
          size={Button.sizes.xSmall}
          backgroundColor={'#CACACA'}
          color={'#282828'}
          labelStyle={{fontSize: 12}}
        />
      </View>

      <View
        style={{
          height: responsiveHeight(20),
          width: responsiveWidth(100),
          paddingLeft: 10,
          // paddingRight:5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: responsiveHeight(20),
            width: responsiveWidth(95),
            backgroundColor: 'blue',
        
            borderWidth: 5, 
            borderColor: 'white', 
            borderRadius: 10, 
          }}>
          <View
            style={{
              flex: 0.5,
              marginLeft: -1,
              marginTop: -1,
              width: responsiveWidth(50),
              alignItems: 'center',
            }}>
            <ImageBackground
              source={images.ellipse} // Replace with your image URL or local path
              style={{
                height: responsiveHeight(19),
                width: responsiveWidth(55),
                overflow: 'hidden',
                position: 'absolute', // Stays in the left half
                left: 0,
                top: 0,
              }}
              resizeMode="cover"
            />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  width: 100,
                  fontSize: responsiveFontSize(2.4),
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                }}>
                Track Your Service
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              // width: responsiveWidth(50),
              // height: responsiveHeight(19),
              backgroundColor: '#929292',
              zIndex: -1,
              marginLeft: -25,
              justifyContent:'center',
              alignContent:'center',
              flexDirection:'row'
            }}>
              
            <ImageBackground
              source={images.group} 
              style={{
                height: responsiveHeight(19),
                width: responsiveWidth(50),
                overflow: 'hidden',
                position: 'absolute', 
                left: 0,
                top: 0,
                
              }}
              resizeMode="cover"
            />

            {/* <Button
              style={styles.roundButton}
              onPress={() => console.log('Button Pressed!')}
            /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  reserve: {
    justifyContent: 'center',
    height: responsiveHeight(30),
    width: responsiveWidth(100),
    alignItems: 'center',
    backgroundColor: 'red',
  },
  serviceRow: {
    justifyContent: 'center',
    height: responsiveHeight(5), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  serviceText: {
    fontSize: responsiveFontSize(4),
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  serviceSlider: {
    height: responsiveHeight(25), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    // backgroundColor: 'green',
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  imageBackground: {
    width: 300, // Set the width of the ImageBackground
    height: 200, // Set the height of the ImageBackground
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 10, // Optional: Add rounded corners
    overflow: 'hidden', // Ensure the borderRadius is applied to the background
  },
  roundButton: {
    width: 60, // Diameter of the button
    height: 60, // Diameter of the button
    borderRadius: 100, // Makes the button circular
    backgroundColor: '#3498db', // Button background color
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Home;
