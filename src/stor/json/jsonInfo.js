// const [count, setCount] = useState(0);
const POST_ENDPOINT = 'http://api.botasi.ge/post/';
const GET_TEST_JSON = 'https://reactnative.dev/movies.json';

export class INFO {
  //   static init() {
  //     return new Promise((resolve, reject) => {});
  //   }

  static setPosts() {
    return fetch(POST_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    })
      .then(responseData => {
        return JSON.stringify(responseData);
      })
      .catch(error => {
        console.error(error);
      })
      .done();
  }

  static getPosts() {
    return fetch(GET_TEST_JSON)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
