import React, {useRef, useState} from 'react';
import {View, Text, Pressable, LayoutAnimation} from 'react-native';
import {FlashList} from '@shopify/flash-list';

const Todo = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const list = useRef < FlashList > null;

  const removeItem = item => {
    setData(
      data.filter(dataItem => {
        return dataItem !== item;
      }),
    );
    // This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.
    list.current?.prepareForLayoutAnimationRender();
    // After removing the item, we can start the animation.
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          removeItem(item);
        }}>
        <View>
          <Text>Cell Id: {item}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlashList
      // Saving reference to the `FlashList` instance to later trigger `prepareForLayoutAnimationRender` method.
      ref={list}
      // This prop is necessary to uniquely identify the elements in the list.
      keyExtractor={item => {
        return item.toString();
      }}
      renderItem={renderItem}
      estimatedItemSize={100}
      data={data}
    />
  );
};

export default Todo;
