"use strict";

let data;

async function getData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

async function init() {
    data = await getData('https://dahlgren.miun.se/ramschema_ht23.php');
    console.table(data);
}    

init();
    