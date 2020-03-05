import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';

import { loadPosts } from '../stor/actopns/post';
import { PostList } from '../components/PostList';

export const MyTasks = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('post', {
      postId: post.id
    });
  };

  const bookedPosts = useSelector(state => state.post.emai);
  const taskPosts = useSelector(state => state.post.task);
  return (
    <View>
      <PostList data={bookedPosts} onOpen={openPostHandler} task={'booked'} />
      <PostList data={taskPosts} onOpen={openPostHandler} task={'task'} />
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
