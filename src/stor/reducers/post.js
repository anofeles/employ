import { LOAD_POSTS, TOGGLE_BOOKED, TOKEN_NOTIF, ADD_ORDER } from '../type';

const initiakState = {
  allPosts: [],
  emai: [],
  loading: true
};

export const postReducer = (state = initiakState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        emai: action.payload.filter(post => post.emai === action.emai),
        task: action.payload.filter(post => post.task === action.emai),
        loading: false
      };
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map(post => {
        if (post.id === action.emai.id) {
          console.log(action);
          post.task = action.emai.emai;
        }
        return post;
      });

      return {
        ...state,
        allPosts
      };
    case TOKEN_NOTIF:
      const token = state.allPosts.map(post => {
        post.token = action.emai.token;
        return post;
      });

      return {
        ...state,
        allPosts: token
      };

    case ADD_ORDER:
      return {
        ...state,
        allPosts: action.payload,
        emai: action.emai
      };

    default:
      return state;
  }
};
