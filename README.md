# apiproxy
 Send api requests through another api. Comes with state of the art authentication...

 Why? Because some websites' api use cookies based on ip and they block certain ips from cloud services. This sets up an express server which exposes a single endpoint to send the request through.

 Usage:
 1. Set your very secure key in index.js 
 2. `npm install`, `npm start`
 3. Send a post request to `<PUBLIC IP>/apiproxy:5454` with the headers 
 `{
    'method': "POST",
    'contentType': "application/json",
    'payload': JSON.stringify(
      {
        'key': YOUR KEY,
        'url': THE REAL URL YOU WANT,
        'parameters': HEADERS
      }
    )
  }`
4. Response sends back a string with `{data: {...}, headers: {...}}`

 

