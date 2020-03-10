import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Device from 'expo-device';

import { loadPosts, toogleBooked } from '../stor/actopns/post';
import { PostList } from '../components/PostList';

import * as Contacts from 'expo-contacts';
import * as Cellular from 'expo-cellular';

export const Tasck = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const dispach = useDispatch();
  const emai = Device.osBuildId;
  const openPostHandler = post => {
    navigation.navigate('post', {
      postId: post.id
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts(emai));
  }, [dispatch]);

  const allPost = useSelector(state => state.post.allPosts);

  return <PostList data={allPost} onOpen={openPostHandler} task={'booked'} />;
};
