//import express from 'express'

const express = require('express');
const pdfcrowd = require("pdfcrowd");

var app = express()
 
app.get('/pdf', function (req, res) {

// create the API client instance
var client = new pdfcrowd.HtmlToPdfClient("<USER_ID>", "<API_KEY>");

// run the conversion and write the result to a file
client.convertFileToFile(
    "Sample.html",
    "Sample.pdf",
    function(err, fileName) {
        if (err) return console.error("Pdfcrowd Error: " + err);
        console.log("Success: the file was created " + fileName);
    });
  res.send('PDF Generated')
})

 
app.get('/image', function (req, res) {
// create the API client instance
var client = new pdfcrowd.HtmlToImageClient("<USER_ID>", "<API_KEY>");

// configure the conversion
try {
    client.setOutputFormat("png");
} catch(why) {
    console.error("Pdfcrowd Error: " + why);
    console.error("Pdfcrowd Error Code: " + why.getCode());
    console.error("Pdfcrowd Error Message: " + why.getMessage());
    process.exit(1);
}

// run the conversion and write the result to a file
client.convertFileToFile(
    "sample.html",
    "Sample.png",
    function(err, fileName) {
        if (err) return console.error("Pdfcrowd Error: " + err);
        console.log("Success: the file was created " + fileName);
    });

  res.send('Image Generated')
})

 
app.listen(3000)