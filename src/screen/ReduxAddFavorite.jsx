
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  Button,
} from 'react-native';
import {Icon, Assets} from 'react-native-ui-lib';
import {icons, images} from '../constants';
import {FlashList} from '@shopify/flash-list';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavoriteList } from '../redux/listSlices';
const ReduxAddFavorite = () => {
 

  const items = useSelector(state => state.favoriteList)
  const dispatch = useDispatch();
  console.log("items",items);
  
  const removeItem = index => {
    dispatch(removeFavoriteList(index.id))
    getUser();
  }
  
  let ReduxExampleData = [
    {id: 1, name: 'Abc', ids: 122354},
    {id: 2, name: 'Abcd', ids: 12354},
    {id: 3, name: 'zyx', ids: 123545},
    {id: 4, name: 'xyz', ids: 565656},
  ];
  
  const [messages, setMessages] = useState([]);


    useEffect(() => {
      getUser();
    }, []);
    const getUser = async () => {
      setMessages(items); }

  const deleteMessage = item =>{
    console.log(item);
    
  }
  const renderItem = ({item}) => (
    <View style={styles.messageBubble}>
       
 
        <Text style={styles.messageText}>{item.name}</Text>
     
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>


        <TouchableOpacity
          style={{}}
          onPress={() => {
            deleteMessage(item.ids);
            removeItem(item)
          }}>
          <Icon source={icons.deleteIcon} tintColor={'#ffffff'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlashList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.ids}
        estimatedItemSize={50}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messageBubble: {
    backgroundColor: '#007bff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    width: responsiveWidth(95),

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
export default ReduxAddFavorite;
