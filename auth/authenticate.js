file = process.argv[2] || './credentials'
var credentials = require(file);
var googleapis = require('googleapis');
var OAuth2 = googleapis.auth.OAuth2;
var open = require("open");

var oauth2Client = new OAuth2(credentials.CLIENT_ID, credentials.CLIENT_SECRET, credentials.REDIRECT_URL);


if (!credentials || !credentials.CLIENT_ID) {
	console.log("You must put your oAuth credentials in ./credentials.js, or add a path as an argument")
	console.log("get them at https://console.developers.google.com")
	console.log("  ")
	console.log("OAuth is hard, but you can do it!  ")
	return
}

command_line_ask = function(question, format, callback) {
	var stdin = process.stdin,
		stdout = process.stdout;
	stdin.resume();
	console.log(question + ": ");
	stdin.once('data', function(data) {
		data = data.toString().trim();
		if (format.test(data)) {
			callback(data);
		} else {
			stdout.write("paste in the data and press enter ;)\n");
			command_line_ask(question, format, callback);
		}
	});
}


// generates a url that allows offline access and asks permissions
// for Google+ scope.
var url = oauth2Client.generateAuthUrl({
	access_type: 'offline',
	scope: 'https://www.googleapis.com/auth/freebase'
});
console.log('opening authentication url in your browser... ')
open(url)
console.log(" ")
command_line_ask("  what is the 'code' from the resulting webpage: ", /.+/, function(code) {
	console.log('...generating tokens...')
	oauth2Client.getToken(code, function(err, tokens) {
		if (err) {
			console.log(err)
			return
		}
		console.log(" ")
		console.log(" ")
		console.log(" ")
		console.log(" ")
		console.log(" ")
		console.log("woohoo!")
		console.log("here are your oauth tokens, they last about 3 hours..")
		console.log("===========================")
		console.log(JSON.stringify(tokens, null, 2))
		console.log("===========================")
		console.log(" ")
		console.log(" ")
		console.log(" ")

		//a temp mqlwrite query to run
		var query = [{
			"id": "/en/radiohead",
			"type": [{
				"id": "/music/artist",
				"connect": "insert"
			}]
		}]
		var url = "https://www.googleapis.com/freebase/v1/mqlwrite?oauth_token=" + tokens.access_token + "&query=" + JSON.stringify(query)
		console.log("   to perform a mqlwrite, visit this url:   ")
		console.log("   ")
		console.log(url)
		console.log("   ")
		console.log("   ")
		console.log("   or in javascript:")
		console.log("   ")
		console.log("access_token= '" + tokens.access_token + "'")
		console.log("freebase.add_type('/en/radiohead', {type:'/music/artist', oauth_token:access_token})")
		console.log("   ")
		console.log("   ")
		console.log("you rule!")
		process.exit(0)
	})
})