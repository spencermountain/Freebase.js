//freebase writes require oAuth authentication.. ;(
//get your oauth credentials at https://console.developers.google.com
//(don't commit them!)

//Instructions:
//  create an api project and enable the Freebase API
//  in the 'Credentials' section, create a new Client ID -> 'installed application', 'other'
//  Run 'node ./auth.js'
//  You will be given a url to visit in your browser, that gives you an OAuth code.
//  Paste the oAuth code, and you'll be given your

module.exports = {
	API_KEY: "", //your mqlread api_key (a hash)
	CLIENT_ID: "", // (ends with .googleusercontent.com)
	CLIENT_SECRET: "", //(a hash)
	REDIRECT_URL: "" // (use the 'urn:', preferably)
}