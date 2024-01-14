# URL Shortener README

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
  - [HTML (index.html)](#html-indexhtml)
  - [JavaScript Files](#javascript-files)
    - [Main JavaScript (index.js)](#main-javascript-indexjs)
    - [URL Shortening Logic (shortenUrl.js)](#url-shortening-logic-shortenurljs)
    - [List of Links Logic (getlist.js)](#list-of-links-logic-getlistjs)
  - [CSS (index.css)](#css-indexcss)
- [Styling](#styling)
- [Usage](#usage)
- [Import and Export](#import-and-export)

## Overview

This project is a URL shortener web application that allows users to shorten long URLs and view a history of the links they have shortened. The application uses the [Many APIs](https://manyapis.com) service for URL shortening. The implementation includes the use of async functions, DOM manipulation, event listeners, and GET and POST methods to fetch information from the API.

## Project Structure

### HTML (index.html)

The project's HTML file (`index.html`) is organized as follows:

- **Head Section:**
  - Includes necessary meta tags.
  - Imports the main JavaScript file (`index.js`).
  - Links Bootstrap CSS for styling.

- **Body Section:**
  - Navigation bar with links to the home page and a page to view the user's shortened links.
  - Main section with a form to submit long URLs for shortening.
  - Display of the shortened URL.
  - Section for viewing the user's shortened links, including a table.

### JavaScript Files

#### Main JavaScript (index.js)

- **Variables:**
  - `API_KEY`: API key for Many APIs.
  - Various DOM elements for form, input box, shortened link, buttons, and table.

- **Logic:**
  - Calls functions for URL shortening and retrieving the list of links.
  - Event listeners for form submission and button clicks.
  - Function to copy the shortened URL to the clipboard.

- **Import and Export:**
  - Imported functions and variables from `shortenUrl.js` and `getlist.js`.
  - Exported variables such as `form`, `inputBox`, `shortenedLink`, `API_KEY`, `getLinksBtn`, `listOfLinks`, `tableBody`, `originalLink`.

#### URL Shortening Logic (shortenUrl.js)

- **Functionality:**
  - Listens for form submission.
  - Fetches a shorter URL using the Many APIs service.
  - Updates the UI with the shortened URL.

- **Import and Export:**
  - Imported variables from `index.js`.
  - Exported the `shortenUrl` function.

#### List of Links Logic (getlist.js)

- **Functionality:**
  - Listens for button click to retrieve the list of links.
  - Fetches the list from Many APIs.
  - Populates a table with link details.

- **Import and Export:**
  - Imported variables from `index.js`.
  - Exported the `getList` function.

### CSS (index.css)

- Hides the list of links by default (`display: none`).
- Styled components for better UI.

## Styling

The project utilizes Bootstrap (v5.3.2) for styling, providing a clean and responsive design.

## Usage

1. Open `index.html` in a web browser.
2. Paste a long URL in the input box and click "Shorten URL" to get a shortened URL.
3. Click on "My Links" in the navigation bar to view a history of shortened links.
4. Click "Show My Links" to display the table with link details.

Feel free to explore the code files (`index.js`, `shortenUrl.js`, `getlist.js`, and `index.css`) for a detailed understanding of the implementation.

## Contact

**Developer:** Jose Lopez Cobano (CobiDev) 
**Email:** cobitremolo@gmail.com 
