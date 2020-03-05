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

  useEffect(() => {
    dispach(loadPosts(emai));
  }, [dispach]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.coinmarketcap.com/v1/ticker/?limit=1`
        );
        const json = await response.json();
        setCount(json);
        // let response = await fetch(POST_ENDPOINT, {
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     token: {
        //       value: '1'
        //     }
        //   })
        // });
        // let responseJson = await response.json();
        // return responseJson;
      } catch (e) {
        console.loge('json', e);
      }
    })();
  }, []);

  const allPost = useSelector(state => state.post.allPosts);
  console.log(count);

  return <PostList data={allPost} onOpen={openPostHandler} task={'booked'} />;
};
