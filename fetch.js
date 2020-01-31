// THE MAIN ENDPOINT FOR YOUR API
const baseUrl = 'http://localhost:3000/posts';
// HEADERS
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};
// TURNING THE RESPONSE OBJECT INTO JSON DATA
const jsonData = d => JSON.stringify(d);
// DYNAMIC CONFIGURATION OBJECT FOR REQUESTS
const config = (verb, data) => {
  switch (verb) {
    case 'POST':
    case 'PATCH':
      return {
        method: verb,
        headers: headers,
        body: jsonData(data)
      };
    case 'DELETE':
      return {
        method: verb
      };
    default:
      return {
        method: 'GET'
      };
  }
};

// DATA YOU WANT TO SEND TO THE API
const dataPayload = {
  userId: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
};
// ACTUAL FETCH
fetch(baseUrl, config('POST', dataPayload))
  .then(r => r.json())
  .then(data => {
    // DO SOMETHING WITH THE DATA
    console.log(data);
  });
