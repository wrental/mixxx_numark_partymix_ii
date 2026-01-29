// name: Numark-Party-Mix-II.scripts.js
// auth: wrental
// date: 2026-01-24
// desc: scripts file for Numark-Party-Mix-II.midi.xml

var NumarkPartyMixII = {};
var ControllerStatusSysex = [0xF0, 0x00, 0x20, 0x7F, 0x03, 0x01, 0xF7];

NumarkPartyMixII.pad1 = function () {};
NumarkPartyMixII.pad2 = function () {};

NumarkPartyMixII.init = function (id, debugging) {
	// serato SysEx state check
	midi.sendSysexMsg(ControllerStatusSysex, ControllerStatusSysex.length);

	NumarkPartyMixII.pad1 = NumarkPartyMixII.hotcue;
	NumarkPartyMixII.pad2 = NumarkPartyMixII.hotcue;
}

NumarkPartyMixII.shutdown = function (id) {
	
}

NumarkPartyMixII.hotcue = function (channel, control, value, status, group, padNum) {
	engine.setValue(group, "hotcue_" + padNum + "_activate", value);
}

NumarkPartyMixII.loop = function (channel, control, value, status, group, padNum) {
	var loopSize = getSetting("pad" + padNum + "Loop");
	engine.setValue(group, "beatloop_" + loopSize + "_activate", value);
}

NumarkPartyMixII.pfl = function (_channel, _control, value, _status, group) {
	if (value === 0x7F) {
		engine.setValue(group, "pfl", 1);
	} else {
		engine.setValue(group, "pfl", 0);
	}
}

NumarkPartyMixII.pad = function (channel, control, value, status, group) {
	var padNum = control - 19;
	if (group === "[Channel1]") {
		NumarkPartyMixII.pad1(channel, control, value, status, group, padNum);
	}
	else if (group === "[Channel2]") {
		NumarkPartyMixII.pad2(channel, control, value, status, group, padNum);
	}
}

NumarkPartyMixII.switchMode = function (channel, control, value, status, group) {
	if (group === "[Channel1]") {
		NumarkPartyMixII.pad1 = NumarkPartyMixII.getNewMode(control);
	} else if (group === "[Channel2]") {
		NumarkPartyMixII.pad2 = NumarkPartyMixII.getNewMode(control);
	}
}
	
NumarkPartyMixII.getNewMode = function (control) {
	if (control === 0x00) {
		NumarkPartyMixII.hotcue;
	} else if (control === 0x0E) {
		NumarkPartyMixII.loop;
	} else if (control === 0x0B) {
		NumarkPartyMixII.sample;
	} else if (control === 0x0F) {
		NumarkPartyMixII.effect;
	}
}


NumarkPartyMixII.jogwheel = function (channel, control, value, status, group) {
	scripts.nop();
}

