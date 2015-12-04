// Twilio Credentials 
// connected to Daniels cellphone
twicreds = require('./twiliocredentials.js');

contacts = require('./contacts.js');
 
//require the Twilio module and create a REST client 
var client = require('twilio')(twicreds.accountSid, twicreds.authToken); 

var person = contacts.joschko;
console.log("send sms to", person);
client.messages.create({ 
	to: person.number, 
	from: twicreds.sender, 
	body: "Hi, " + person.name + "! Wenn du das liest bitte an meine normale Nummer antworten. LG Dan",   
	}, function(err, message) { 
		console.log(err);
		console.log(message);
		console.log("Message sent.", message.sid); 
	}
);
