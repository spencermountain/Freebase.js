//make a test write to freebase.com with nodejs
//run 'npm install googleapis request'
//then run this javascript file.
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

console.log("  ")
console.log("  ")
console.log("  ")
console.log(" ================================================================= ")
console.log(" welcome, this script will help you write to freebase using nodejs. ")
console.log(" ================================================================= ")
console.log("  ")
console.log("OAuth is hard, but you can do it!  ")
try{
	var request = require('request');
	var googleapis = require('googleapis');
	var OAuth2Client = googleapis.OAuth2Client;
	var fns = require('./helpers/helpers');
}catch(e){
	console.log("to run this script, first run 'npm install googleapis request'. it's easy.")
	console.log("exiting.")
	process.exit(code=0)
}
var mqlwrite="https://www.googleapis.com/freebase/v1/mqlwrite"

console.log("  ")
console.log(" First, you must go to https://code.google.com/apis/console ")
console.log("  ")
console.log("   1) - Create an app and turn Freebase 'on' in the 'Services' section.")
console.log("  ")
console.log("   2) - Generate an OAuth2 'web application' in the 'API Access' section.")
console.log("  ")
console.log("   3) - You will be asked to paste in your Oauth Client ID and Client secret.")
console.log("  ")
console.log("   4) - Click 'edit settings' and add a redirect URL, (it can be anything) then paste it in here.")
console.log("  ")
console.log("   5) - You will be given a url to visit in your browser, that gives you an OAuth code.")
console.log("  ")
console.log("   6) - Finally, using that code, this script makes a trivial test write to freebase and gives you your final token")
console.log("  ")
console.log("  ")
console.log("  ")
console.log("  thats it.  you can do it")
console.log("  ")
console.log("  ")

command_line_ask("So, on the google api console, what is your OAuth 'Client ID'? (it should end in '.googleusercontent.com')", /.+/, function(CLIENT_ID ) {
  console.log("  ")
  console.log("great.")
  command_line_ask("what is the OAuth 'Client Secret' from this page? (it should be a bunch of characters)", /.+/, function(CLIENT_SECRET) {
  	console.log("  ")
		console.log("great.")
    command_line_ask("Now, in 'edit settings', add any Redirect URL, and paste it in here:\n  (I use \"http://www.blankwebsite.com/\" and it works fine)", /.+/, function(REDIRECT_URL) {
			var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
			var url = oauth2Client.generateAuthUrl({
				scope: 'https://www.googleapis.com/auth/freebase'
			});
			console.log("  ")
			console.log("COOL. visit this url in your browser:")
			console.log("  ")
			console.log(url)
			console.log("  ")
			console.log("  ")

			command_line_ask("what is the 'code' parameter on the page you redirected to?", /.+/, function(code) {

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
										console.log("     ")
										console.log("you can also write like this:   ")
										console.log('   freebase.add_type("/en/radiohead", {type:"/music/artist", token: "'+tokens.access_token+'"}) ')
										console.log("     ")
										console.log("your oauth_token is: ")
										console.log(tokens.access_token)
										console.log("     ")
										console.log("     ")
										console.log(" (use '/freebase/v1sandbox/mqlwrite' to test in the sandbox )  ")
										console.log("     ")
										console.log(" you rule!  ")
										process.exit(code=0)

							}else{
								console.log(JSON.stringify(data,null,2))
							}
						}catch(e){console.log(e)}
					});


				});


			})

    })
  })
})










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