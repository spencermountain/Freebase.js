var credentials = require('./credentials')
if (!credentials || !credentials.CLIENT_ID) {
	console.log("You must put your oAuth credentials in ./credentials.js")
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

var googleapis = require('googleapis'),
	OAuth2 = googleapis.auth.OAuth2;

var oauth2Client = new OAuth2(credentials.CLIENT_ID, credentials.CLIENT_SECRET, credentials.REDIRECT_URL);

// generates a url that allows offline access and asks permissions
// for Google+ scope.
var url = oauth2Client.generateAuthUrl({
	access_type: 'offline',
	scope: 'https://www.googleapis.com/auth/freebase'
});
console.log('visit this url in your browser:')
console.log(url)

command_line_ask("what is the 'code' parameter on the page you redirected to?", /.+/, function(code) {
	console.log('...')
	oauth2Client.getToken(code, function(err, tokens) {
		if (err) {
			console.log(err)
			return
		}
		console.log("woohoo!")
		console.log("here are your oauth tokens, it lasts about 3 hours..")
		console.log("===========================")
		console.log(JSON.stringify(tokens, null, 2))
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
		console.log("perform a mqlwrite like this:   ")
		console.log(url)
		console.log("   ")
		console.log("   ")
		console.log("or in your javascript:")
		console.log("freebase.add_type('/en/radiohead', {type:'/music/artist', oauth_token:access_token})")
	})
})