# PDFCROWD tester
Wrapper for converting sample HTML to PDF or Image. 


## How to test
* Go to [PDF crowd](pdfcrowd.com) and sign up with a trial account
* Edit *index.js* and change <USER_ID> with PDF crowd user id and  <API_KEY> with PDF crowd API key.
* Paste the sample HTML in *sample.html*
* run `npm start` command to start the server.
* Hit http://localhost:3000/image for generating image out of sample HTML.
* Hit http://localhost:3000/pdf for generation image out of sample HTML.   
* You should see *Sample.pdf* and *Sample.png* in the project folder.