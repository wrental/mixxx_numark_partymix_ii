// name: Numark-Party-Mix-II.scripts.js
// auth: wrental
// date: 2026-01-24
// desc: scripts file for Numark-Party-Mix-II.midi.xml

var NumarkPartyMixII = {};
var ControllerStatusSysex = [0xF0, 0x00, 0x20, 0x7F, 0x03, 0x01, 0xF7];
var mode1 = "hotcue";
var	mode2 = "hotcue";

NumarkPartyMixII.init = function (id, debugging) {
	// serato SysEx state check
	midi.sendSysexMsg(ControllerStatusSysex, ControllerStatusSysex.length);

	// check/set global PAD_MODE variables 


	// check/set global SCRATCH booleans (SCRATCH_1, SCRATCH_2)
	

}

NumarkPartyMixII.shutdown = function (id) {
	
}

NumarkPartyMixII.pfl = function (_channel, _control, value, _status, group) {
	if (value === 0x7F) {
		engine.setValue(group, "pfl", 1);
	}
	else {
		engine.setValue(group, "pfl", 0);
	}
}

NumarkPartyMixII.getMode = function (group) {
	if (group === "[Channel1") {return mode1}
	else if (group === "[Channel2]") {return mode2}
	else return null;
}

NumarkPartyMixII.switchToMode = function (channel, control, value, status, group) {

}

NumarkPartyMixII.pad = function (channel, control, value, status, group) {
	switch (NumarkPartyMixII.getMode(group)) {
		case "hotcue":
			
			break;
		case "loop":
			
			break;
		case "sample":
		
			break;
		case "effect":
			
			break;
	}
}


NumarkPartyMixII.jogwheel = function (channel, control, value, status, group) {

}


