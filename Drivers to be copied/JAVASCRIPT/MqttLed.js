var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://iot.eclipse.org');
var m = require('mraa'); //require mraa
var myLed = new m.Gpio(13); 
myLed.dir(m.DIR_OUT); //set the gpio direction to output

 
client.on('connect', function () {
  client.subscribe('rupam/data');
//  client.publish('presence', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
   if(message.toString()=='ON')
  {
   myLed.write(1);
  }
if(message.toString()=='OFF')
  {
   myLed.write(0);
  }
  //client.end();
});