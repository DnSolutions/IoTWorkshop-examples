var sys = require('sys');
var exec = require('child_process').exec;

var mraa = require('mraa');
var LCD = require('jsupm_i2clcd');
var groveSensor = require('jsupm_grove');
var ldr = new mraa.Aio(0);
var myLCD = new LCD.Jhd1313m1(6,0x3E,0x62);

var temp = new groveSensor.GroveTemp(1);
function puts(error, stdout,stderr){sys.puts(stdout)};
loop();
function loop(){
	var light = ldr.read();
	var temperature = temp.value();
	console.log(light+"&"+temperature);
	exec("curl \"https://api.thingspeak.com/update?api_key=AHML35CDETMWXCG4&field1="+light+"\"",puts);
	exec("curl \"https://api.thingspeak.com/update?api_key=AHML35CDETMWXCG4&field2="+temperature+"\"",puts);
	myLCD.setCursor(1,1);
	myLCD.write(""+temperature);
	
		
	setInterval(loop,15000);
}

