import {getLinksBtn, listOfLinks, API_KEY} from './index.js';

// Declare function to list the links
export async function getList(){
    try{
        getLinksBtn.addEventListener("click", (event) => {
            const headers = {
                'Accept':'application/json',
                'x-api-key': API_KEY
              };
              
              fetch('https://api.manyapis.com/v1-list-short-url',
              {
                method: 'GET',
              
                headers: headers
              })
              .then(function(res) {
                  return res.json();
              }).then(function(body) {
                  console.log(body.data);
                  addLinksToTable(body.data);
              });
        })
    }
    catch(error){
        console.log(error);
    }
}

/** Declare function that adds links to a table.
It takes the array from the result given by the API 
and pass the data from each object into a new row **/


function addLinksToTable(arr){
    // Filter the object so we get rid of the data we don't need(sid, expiry, updateAt) and keep the rest.
    const filteredData = arr.map(({ sid, expiry, updatedAt, ...rest }) => rest);
    console.log("filtered Data: ", filteredData);

    filteredData.forEach((object) => {
                
        let tableRow = document.createElement('tr');
        for (const property in object){
            let td = document.createElement('td');
            td.textContent = object[property];
            tableRow.appendChild(td);
        }
        listOfLinks.appendChild(tableRow);   
    })    
}



// function addHeadersToTable(arr){
//     const headers = Object.keys(arr);

// }

// function addLinksToTable(arr){
//     arr.forEach((link) => {
//         document.createElement("tr")
//     })
    
// }