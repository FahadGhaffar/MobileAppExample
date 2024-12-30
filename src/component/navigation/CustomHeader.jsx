import {StyleSheet} from 'react-native';

import {View, Text, TouchableOpacity, Icon} from 'react-native-ui-lib';

import {icons} from '../../constants';

const CustomHeader = ({title, onBack}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Icon source={icons.lessSign} tintColor={'#ffffff'} size={17} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Icon source={icons.close} tintColor={'#ffffff'} size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161719',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 16,
    color: '#007BFF',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
