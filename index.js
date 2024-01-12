import {shortenUrl} from './shortenUrl.js';
export {form, inputBox, shortenedLink, API_KEY, getLinksBtn};


// Variables for all modules
const API_KEY = "sk_4f99a29fbce64868948b342fd520b2c0";


// LOGIC FOR THE SHORTEN URL FUNCTION
// Variables 
const form = document.querySelector(".form");
const inputBox = document.querySelector(".urlInputBox");
// const shortenBtn = document.querySelector(".shortenBtn");
const shortenedLink = document.querySelector(".shortened-link");


// Call function to shorten URL
shortenUrl();

// LOGIC FOR THE GET LINKS FUNCTION
// Variables 
const getLinksBtn = document.querySelector(".getLinksBtn");
