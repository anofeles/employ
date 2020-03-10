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
        "write_api_key": "WRITE_API_KEY",
        "updates": [{
          "delta_t": 4,
          "field1": 1.0,
          "field2": "2.0"
        },
          {
            "delta_t": 2,
            "field1": 1.1,
            "field2": 2.2,
            "elevation": 6,
            "status": "Good"
          }
        ]
      })
    })
      .then(responseData => {
        console.log("saccsess: ",JSON.stringify(responseData));
        return JSON.stringify(responseData);
      })
      .catch(error => {
        console.error("catch: ",error);
        return error;
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
