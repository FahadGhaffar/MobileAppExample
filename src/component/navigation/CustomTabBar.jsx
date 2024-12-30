import {StyleSheet, TouchableOpacity} from 'react-native';

import {View, Colors, Icon} from 'react-native-ui-lib';

import {responsiveWidth} from 'react-native-responsive-dimensions';

import {icons} from '../../../src/constants/index.js';
const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {/* Black Rounded Tab Bar */}
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
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
              style={styles.tabButton}>
              <Icon
                source={iconName}
                size={24}
                color={isFocused ? Colors.white : Colors.grey60}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('service')}>
        <Icon
          name="headphones"
          source={icons.call}
          size={24}
          color={Colors.blue30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 20,
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
    shadowOffset: {width: 0, height: 5},
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
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default CustomTabBar;
