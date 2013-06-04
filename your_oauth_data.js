//OAuth is hard, but you can do it!
//
//First, you must go to https://code.google.com/apis/console
// - Create an app and turn Freebase 'on' in the 'Services' section.
// - Generate an OAuth2 'web application' in the 'API Access' section.
// - Click 'edit settings' and add a redirect URL, it can be anything. (I use http://www.blankwebsite.com)
// - paste in your Oauth Client ID, Client secret, and Redirect Url here
// now in your script, run 'freebase.authenticate(callback)'
// (and dont commit this file)
//profit!

//enter your data from https://code.google.com/apis/console:
exports.data={
 CLIENT_ID: "", //should end in ".apps.googleusercontent.com"
 CLIENT_SECRET: "", //a hash
 REDIRECT_URL: "" //can be anything (like http://www.blankwebsite.com)
}