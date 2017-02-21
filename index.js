var TransIP = require('transip-node');
var fs = require('fs');

var userName = process.env.TRANSIP_USER;
if(!userName || userName === '') {
	console.error('Environment variable TRANSIP_USER was not set or empty.');
	process.exit(1);
}
var privateKey = fs.readFileSync('/opt/privateKey');
if(privateKey === '') {
	console.error('Private key file was empty (should be mapped to /opt/privateKey).');
	process.exit(1);
}

var haipName = process.env.HAIP_NAME;
if(!userName || userName === '') {
        console.error('Environment variable HAIP_NAME was not set or empty.');
        process.exit(1);
}
var vpsName = process.env.DESTINATION_VPS;
if(!vpsName || vpsName === '') {
        console.error('Environment variable DESTINATION_VPS was not set or empty.');
        process.exit(1);
}

var transipInstance = new TransIP(userName, privateKey);

// Lets first fetch the Haip
transipInstance.haipService.getHaip(haipName).then(function(haipResult) {
	console.log('Defined haip was found');
	transipInstance.vpsService.getVps(haipResult.vpsName).then(function(vpsResult) {
		console.log('HAIP currently sends traffic to ' + vpsResult.description + ' (' + haipResult.vpsName + ')');
		if(vpsName === haipResult.vpsName) {
			console.log('Traffic is already sent to the specified address');
			return;
		}
		transipInstance.vpsService.getVps(vpsName).then(function(vpsResult) {
			console.log('HAIP will be modified to instead send traffic to ' + vpsResult.description + ' (' + vpsResult.name + ')');
			transipInstance.haipService.changeHaipVps(haipName, vpsName).then(function(b) {
				if(b) {
					console.log('Switchover finished successfully');
				} else {
					console.error('Problems when switching over');
				}
			});
		});
	});
})

