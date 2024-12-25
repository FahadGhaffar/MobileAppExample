import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import firestore from '@react-native-firebase/firestore';

// Get user document with an ID of ABC

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ChatScreen = () => {
  const getUser = async () => {
    // const userDocument = await firestore()
    //   .collection('Users')
    //   .doc('GMhE4rb5SulfOweVIdyh')
    //   .get();
    const userDocument = await firestore().collection('Users').get();
    userDocument.forEach(doc => console.log(doc.id, doc.data()));
  };

  getUser();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  // const userDocument = await firestore().collection('Users').doc('GMhE4rb5SulfOweVIdyh');
  const addMessage = () => {
    if (inputText.trim()) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setMessages(prevMessages => [
        {id: Date.now().toString(), text: inputText.trim()},
        ...prevMessages,
      ]);
      setInputText('');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
        <TouchableOpacity style={styles.sendButton} onPress={addMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
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
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
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

export default ChatScreen;
