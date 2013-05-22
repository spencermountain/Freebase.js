//make a test write to freebase.com with nodejs
//run 'npm install googleapis request'
//then run this javascript file.


//change these to your details found on https://code.google.com/apis/console
CLIENT_ID = ""
CLIENT_SECRET = ""
REDIRECT_URL = "http://www.blankwebsite.com/"//feel free to use this, or something else  ;)


console.log("  ")
console.log(" ================================================================= ")
console.log(" welcome, this script will help you write to freebase using nodejs. ")
console.log(" ================================================================= ")
console.log("  ")
console.log("  ")
console.log(" First, you must go to https://code.google.com/apis/console ")
console.log("  ")
console.log("   1) - Create an app and turn Freebase 'on' in the 'Services' section.")
console.log("  ")
console.log("   2) - Generate an OAuth2 web application in the 'API Access' section.")
console.log("      - paste the 'client ID' and 'client secret' into this file.")
console.log("  ")
console.log("   3) - click 'Edit settings' and add "+REDIRECT_URL+" to your 'Authorized Redirect URIs' ")
console.log("  ")
console.log("  ")
console.log("  thats it.")
console.log("  ")
console.log("  ")

if(CLIENT_ID=="" || CLIENT_SECRET=="" || REDIRECT_URL==""){
	console.log("you need to add your 'client ID and 'client secret' into this file. it's easy.")
	console.log("exiting.")
	process.exit(code=0)
}

try{
	var request = require('request');
	var googleapis = require('googleapis');
	var OAuth2Client = googleapis.OAuth2Client;
}catch(e){
	console.log("to run this script, first run 'npm install googleapis request'. it's easy.")
	console.log("exiting.")
	process.exit(code=0)
}

var mqlwrite="https://www.googleapis.com/freebase/v1/mqlwrite"

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var url = oauth2Client.generateAuthUrl({
	scope: 'https://www.googleapis.com/auth/freebase'
});

console.log("please open this url in your browser")
console.log("  ")
console.log("    "+url)
console.log("  ")
console.log("  ")


command_line_ask("what is the code parameter on the page you redirected to?", /.+/, function(code) {

	oauth2Client.getToken(code, function(err, tokens) {
		if (err) {
			console.log(err)
		}
		console.log("here are your oauth tokens, you may want to save them.")
		console.log("===========================")
		console.log(JSON.stringify(tokens, null, 2))

		//a temp mqlwrite query to run
		var query = [{
				"id": "/en/radiohead",
				"type": [{
						"id": "/music/artist",
						"connect": "insert"
					}
				]
			}
		]
		var url=mqlwrite+"?oauth_token="+tokens.access_token+"&query="+JSON.stringify(query)
		console.log("=========")
		console.log("     ")
		console.log("     ")
		console.log("  ... having a go at it ..  ")
		console.log("     ")
		request({
			uri: url,
		}, function(error, response, body) {
			console.log("here's the api response for a mqlwrite, it should say radiohead is already a /music/artist...")
			console.log("  ")
			try{
				data=JSON.parse(body)
				if(data.result[0]&& data.result[0].type[0] && data.result[0].type[0].connect=="present"){
					console.log(JSON.stringify(data,null,2))
					success_unicorn()
							console.log("     ")
							console.log("     ")
							console.log("     ")
							console.log("here's your mqlwrite url:")
							console.log(url)
							console.log("     ")
							console.log("   you can paste that into a browser, or whatever  ")
							console.log(" you rule!  ")
							process.exit(code=0)

				}else{
					console.log(JSON.stringify(data,null,2))
				}
			}catch(e){console.log(e)}
		});




	});


})



function command_line_ask(question, format, callback) {
	var stdin = process.stdin,
		stdout = process.stdout;
	stdin.resume();
	stdout.write(question + ": ");
	stdin.once('data', function(data) {
		data = data.toString().trim();
		if (format.test(data)) {
			callback(data);
		} else {
			stdout.write("It should be around 60 characters..\n");
			ask(question, format, callback);
		}
	});
}

function success_unicorn(){
	console.log("*********************************************")
	console.log("*********************************************")
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
	unicorn=
   "    \\.\n"
  +"     \\'.      ;.\n"
  +"      \\ '. ,--''-.~-~-'-,\n"
  +"       \\,-'   ,-.   '.~-~-~~,\n"
  +"      ,-'    (###)   \\-~'~=-.\n"
  +"  _,-'        '-'     \\=~-'~~',\n"
  +" /o                    \\~-''~=-,\n"
  +" \\__                    \\=-,~'-~,\n"
  +"    '''===-----.         \\~=-'~-.\n"
  +"                \\         \\*=~-'\n"
  +" success unicorn \\          '=====----\n"
  +"                  \\ \n"
  +"                   \\ "
  console.log(unicorn)
  console.log("*********************************************")
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}