// name: Numark-Party-Mix-II.scripts.js
// auth: wrental
// date: 2026-01-24
// desc: scripts file for Numark-Party-Mix-II.midi.xml

var NumarkPartyMixII = {};
var ControllerStatusSysex = [0xF0, 0x00, 0x20, 0x7F, 0x03, 0x01, 0xF7];

NumarkPartyMixII.init = function () {
	NumarkPartyMixII.leftDeck = new NumarkPartyMixII.Deck([1], 1);
	NumarkPartyMixII.rightDeck = new NumarkPartyMixII.Deck([2], 2);
	midi.sendSysexMessage(ControllerStatusSysex, ControllerStatusSysex.length);
};

NumarkPartyMixII.shutdown = function () {
};


// Customized deck constructor
// assumes midiChannel is the same for all components on the deck
NumarkPartyMixII.Deck = function (deckNumbers, midiChannel) {
	components.Deck.call(this, deckNumbers);
	this.playButton = new components.PlayButton([0x__ + midiChannel, 0x__]);
	this.cueButton = new components.cueButton([0x__ + midiChannel, 0x__]);
	this.syncButton = new components.SyncButton([0x__ + midiChannel, 0x__]);
  this.pflButton = new components.Button({
	  midi: [0x__ + channel, 0x__],
    key: 'pfl',
  });
	this.padButtons = [];
