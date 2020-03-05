import { LOAD_POSTS, TOGGLE_BOOKED, TOKEN_NOTIF } from '../type';
import { DATA } from '../data';

const PUSH_ENDPOINT = 'http://api.botasi.ge/notification/';
const POST_ENDPOINT = 'http://api.botasi.ge/post/';

export const loadPosts = emai => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
    emai
  };
};
export const toogleBooked = emai => {
  return {
    type: TOGGLE_BOOKED,
    payload: DATA,
    emai
  };
};
export const tokenNotif = emai => {
  const notif = async () => {
    const response = await fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: {
          value: emai
        }
      })
    });
    const responseJson = await response.json();
    console.log(responseJson);
  };
  notif();
  return {
    type: TOKEN_NOTIF,
    payload: DATA,
    emai
  };
};
