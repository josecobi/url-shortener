import {form, inputBox, shortenedLink, API_KEY} from './index.js';

// Declare a function that gets the link the user submitted
export function shortenUrl(){
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        console.log(inputBox.value);
        // Store the value of the input box into a variable to be used in the API requests
        const linkSubmittedByUser = inputBox.value;
        // Get short link
        fetchShortUrl(linkSubmittedByUser);
    });
}



// Declare an async function that takes an url and gets a shorter one from the API
async function fetchShortUrl(longUrl){
    try{
    const inputBody = JSON.stringify({
        "url": longUrl,
        "expiry": "30m"
      });
      const headers = {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'x-api-key': API_KEY
      };
      
      await fetch('https://api.manyapis.com/v1-create-short-url/',
      {
        method: 'POST',
        body: inputBody,
        headers: headers
      })
      .then(function(res) {
          return res.json();
      }).then(function(body) {
          console.log(body);
          const shortenedUrl = body.shortUrl;
          console.log('Shortened URL: ', shortenedUrl);
          shortenedLink.textContent = shortenedUrl;
          return shortenedUrl;
      });
    }
    catch(error){
        console.log('Error: ', error);
    }
      
      
}