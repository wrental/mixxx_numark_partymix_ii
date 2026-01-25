// name: Numark-Party-Mix-II.scripts.js
// auth: wrental
// date: 2026-01-24
// desc: scripts file for Numark-Party-Mix-II.midi.xml

var NumarkPartyMixII = {};
var ControllerStatusSysex = [0xF0, 0x00, 0x20, 0x7F, 0x03, 0x01, 0xF7];

NumarkPartyMixII.init = function (id, debugging) {
	// serato SysEx state check
	midi.sendSysexMsg(ControllerStatusSysex, ControllerStatusSysex.length);
}

NumarkPartyMixII.pfl = function (_channel, _control, value, _status, group) {
	if (value === 0x7F) {
		engine.setValue(group, "pfl", 1);
	}
	else {
		engine.setValue(group, "pfl", 0);
	}
}
