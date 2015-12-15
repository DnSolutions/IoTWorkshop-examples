var LCD = require('jsupm_i2clcd');
var mraa = require('mraa');
var btn = new mraa.Gpio(4); 
btn.dir(mraa.DIR_IN);
var myLCD = new LCD.jhd1313m1(6,0x3E, 0x62);
var state = 0;
function switch_lcd(){
	myLCD.clear();
	var value = btn.read();
	if(value == 0){
		myLcd.setCursor(0,1);
		myLCD.write("Hello");
		myLCD.setColor(255,255,255);
	}
	else{
		myLCD.clear();
	}
}