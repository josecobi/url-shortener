# URL Shortener README

## Table of Contents
1. [Overview](#overview)
2. [Files and Structure](#files-and-structure)
    - [app.js](#appjs)
    - [shortenUrl.js](#shortenurljs)
    - [getlist.js](#getlistjs)
    - [createanchor.js](#createanchorjs)
    - [home.html](#homehtml)
    - [shortenlinks.html](#shortenlinkshtml)
    - [SVG Files](#svg-files)
3. [Usage of Event Listeners and ManyApis.com API](#usage-of-event-listeners-and-manyapiscom-api)
4. [Async Functions and Import/Export](#async-functions-and-importexport)
5. [Note](#note)

## Overview

This project is a URL shortener web application that allows users to shorten long URLs and view a history of the links they have shortened. The application uses the [Many APIs](https://manyapis.com) service for URL shortening. The implementation includes the use of async functions, DOM manipulation, event listeners, and GET and POST methods to fetch information from the API.

## Files and Structure

### app.js

- **Functionality:**
  - Imports and exports variables and functions for various modules.
  - Defines constants like the API_KEY.
  - Sets up logic for the URL shortening form and the "Get Links" functionality.

### shortenUrl.js

- **Functionality:**
  - Handles the logic for shortening URLs.
  - Listens for form submissions, prevents default behavior, and fetches a shorter URL from the ManyApis.com API.
  - Utilizes async functions to handle API requests and responses.

### getlist.js

- **Functionality:**
  - Manages the logic for retrieving and displaying the list of shortened URLs.
  - Utilizes the "Get Links" button to trigger API requests and updates the table with relevant information.

### createanchor.js

- **Functionality:**
  - Declares a function to create anchor elements with URLs.
  - Used for creating clickable links in the table.

### home.html

- **Functionality:**
  - Defines the structure of the home page, including cards with information about features and an action button.
  - Includes an explanation of the app's features and functionality.

### shortenlinks.html

- **Functionality:**
  - Represents the app's main functionality page for URL shortening.
  - Includes a form for submitting long URLs, displaying the short URL, and listing previously shortened URLs.

### SVG Files

- **Functionality:**
  - Provides visual elements (analitics.svg, easyandfast.svg, forfree.svg, and qr-code.svg) for a more engaging and stylish design.

## Usage of Event Listeners and ManyApis.com API

- **Event Listeners:**
  - The app utilizes event listeners to capture user interactions, such as form submissions and button clicks.
  - These listeners trigger various functions that handle the logic for URL shortening and retrieving the list of shortened URLs.

- **ManyApis.com API:**
  - The ManyApis.com API is used for shortening URLs and retrieving a list of shortened URLs.
  - API requests are made using the `fetch` function, and responses are processed to update the app's UI.

## Async Functions and Import/Export

- **Async Functions:**
  - The app uses async functions to handle asynchronous operations, such as API requests.
  - This ensures that the app can perform tasks like fetching data without blocking the main thread.

- **Import/Export:**
  - Modules are imported and exported to organize the code into separate files, promoting maintainability and reusability.

## Note

This explanation provides an overview of the URL Shortener project, describing its file structure, functionality, and the technologies used.


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
