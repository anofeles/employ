import { LOAD_POSTS, TOGGLE_BOOKED, TOKEN_NOTIF, ADD_ORDER } from '../type';
import { DATA } from '../data';

import { INFO } from '../json/jsonInfo';

const PUSH_ENDPOINT = 'http://api.botasi.ge/notification/';
const POST_ENDPOINT = 'http://api.botasi.ge/post/';

export const loadPosts = emai => {
  return async dispatch => {

    dispatch({
      type: LOAD_POSTS,
      payload: DATA,
      emai
    });
  };
};

export const toogleBooked = emai => {
  return {
    type: TOGGLE_BOOKED,
    payload: DATA,
    emai
  };
};

export const addOrderPost = post => {
  return async dispatch => {
    const posts = await INFO.setPosts(post);

    dispatch({
      type: ADD_ORDER,
      payload: DATA,
      emai: post
    });
  }
};

export const tokenNotif = emai => {
  // const notif = async () => {
  //   const response = await fetch(PUSH_ENDPOINT, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       token: {
  //         value: emai
  //       }
  //     })
  //   });
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  // };
  // notif();
  return {
    type: TOKEN_NOTIF,
    payload: DATA,
    emai
  };
};
