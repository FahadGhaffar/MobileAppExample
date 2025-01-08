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
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FlashList} from '@shopify/flash-list';
import firestore from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import {icons, images} from '../constants';
// Get user document with an ID of ABC

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ReduxAdd = () => {
  let tempData = [];


  const [messages, setMessages] = useState([]);
  const [isedit, Setedit] = useState(true);
  const [isSetEditId, setEidtId] = useState('');
  const [inputText, setInputText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  let ReduxExampleData = [
    {id: 1, name: 'Abc', ids: 122354},
    {id: 2, name: 'Abcd', ids: 12354},
    {id: 3, name: 'zyx', ids: 123545},
    {id: 4, name: 'xyz', ids: 565656},
  ];

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    setMessages(ReduxExampleData);
    // const userDocument = await firestore().collection('Users').get();

    // userDocument.forEach(doc => {
    //   doc.data()['ids'] = doc.id;
    //   tempData.push(doc.data());
    // });

    // console.log(tempData);

    // setMessages(tempData);
  };

  const deleteMessage = id => {
    // firestore()
    //   .collection('Users')
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //     console.log('Doc deleted');
    //   })
    //   .catch(error => {
    //     console.error('Error removing document: ', error);
    //   });
  };

  const editMessage = async (docId, text) => {
    // try {
    //   await firestore().collection('Users').doc(docId).update({
    //     id: Date.now().toString(),
    //     name: text,
    //     ids: isSetEditId.trim(),
    //   });
    //   console.log('Document updated successfully!');
    //   setInputText('');
    //   Setedit(true)
    //   getUser()
    // } catch (error) {
    //   console.error('Error updating document: ', error);
    // }
  };

  const addMessage = () => {
    if (inputText.trim()) {
      // firestore()
      //   .collection('Users')
      //   .add({
      //     id: Date.now().toString(),
      //     name: inputText.trim(),
      //   })
      //   .then(() => {
      //     console.log('user added');
      //   });
      // setInputText('');
      // // console.log(messages);
      // getUser();
    }
  };

  const addFavoriteList = item =>{
    console.log(item);
    
  }

  const renderItem = ({item}) => (
    <View style={styles.messageBubble}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{}} onPress={() => {
          addFavoriteList(item)
        }}>
          <Icon
            source={icons.editIcon}
            tintColor={'#ffffff'}
            size={20}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.messageText}>{item.name}</Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            console.log('edits');
            setInputText(item.name);
            setEidtId(item.ids);
            Setedit(false);
          }}>
          <Icon
            source={icons.editIcon}
            tintColor={'#ffffff'}
            size={20}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            deleteMessage(item.ids);
            setModalVisible(true);
          }}>
          <Icon source={icons.deleteIcon} tintColor={'#ffffff'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.ids}
        estimatedItemSize={50}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            isedit ? addMessage() : editMessage(isSetEditId, inputText.trim());
          }}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Delete!</Text>

            <Button
              title="Hide modal"
              onPress={() => {
                setModalVisible(false);
                getUser();
              }}
            />
          </View>
        </Modal>
      </View>
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

export default ReduxAdd;
