var phantom = require('phantom');
var index = require('./index');

//'519333'//szczur

//index.getTeamStartTimes(function(result){
//	console.log(result);
//});

index.scrapePlayer('519333', function(result){
	console.log(result);
});