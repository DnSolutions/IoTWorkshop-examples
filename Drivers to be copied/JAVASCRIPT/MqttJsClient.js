var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://iot.eclipse.org');
 
client.on('connect', function () {
  client.subscribe('rupam/data');
//  client.publish('presence', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  //client.end();
});