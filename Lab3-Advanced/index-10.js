/*Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)

a) Write a new version of this function using async/await
 
b) Test both functions with valid and invalid URLs

c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.*/

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
 let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {// 200 is successful. 500 is failed.
 return response.json();
  } else {
 throw new Error(`Request failed with status ${response.status}`);
  }
 });
 return fetchPromise;
}
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));
// can see on browser if I put the http above directly.(if 2, can get "id"="2")

// fetchURLData('https://jsonplaceholder.typicode.com/todos/1error')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));



async function fetchURLDataB(url) { //a)?
  let fetchResponse = await fetch(url);
  
  if (fetchResponse.status === 200) {
  let responseJson = await fetchResponse.json();
  return responseJson;
  } else {
  throw new Error(`Request failed with status ${fetchResponse.status}`);
  }
  }
// fetchURLDataB('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));

// fetchURLDataB('https://jsonplaceholder.typicode.com/todos/1error')
//  .then(data => console.log(data))
//  .catch(error => console.error(error.message));


/*Promise.all(promises): accepts an iterable of promises, waits for all promises to resolve and
returns an array of their results. If any of the given promises rejects, it becomes the error of
Promise.all, and all other results are ignored.*/

//(c)?
async function fetchURLDataC(urls) { 
  return Promise.all(urls.map(async (url)=>{
    let response = await fetch(url);
    return response.json();
  }))
}

try{
  let data1 = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data1);

  let data2 = await fetchURLDataB('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data2);

  let data3 = await fetchURLDataC(['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2']);
  console.log(data3);

  let dataError = await fetchURLDataB('https://jsonplaceholder.typicode.com/todos/error');
  console.log(data3);
} catch(error) {
  console.log(error.message);
}
  






