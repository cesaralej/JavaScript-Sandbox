

const assert = require('assert');



const fs = require("fs");
const csv = require('csv-parser');
const xlsx = require('node-xlsx').default;


//Exported file headers
const originalHeaders = ['id',
'url',
'title',
'description',
'status',
'suggested topic',
'contact name',
'contact email',
'alternate contact name',
'alternate contact email',
'contact form url']

//Exported file path
downloadedPath = `${process.cwd()}/1566313188353.csv`

//Exported data
let URLHeaders = []

fs.createReadStream(downloadedPath)
.pipe(csv())
.on('headers', (headers) => {

    headers.forEach((header) => { 
        console.log(header)
        URLHeaders.push(header) 
    })

}).on('data', (data) => {

    return

}).on('end', () => {

    URLHeaders.forEach((header, index) => { 

    })


})

