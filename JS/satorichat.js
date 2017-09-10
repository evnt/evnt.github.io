var rtm = new RTM("wss://diotspkh.api.satori.com", "aCcbDD1A473917d767d84aB9bfa0fFe1");

// create a new subscription with "your-channel" name
var channel = rtm.subscribe("your-channel", RTM.SubscriptionMode.SIMPLE);
var channelName = channel.get('name');
// add channel data handlers

// channel receives any published message
channel.on("rtm/subscription/data", function(pdu) {
    pdu.body.messages.forEach(console.log);
});

// client enters 'connected' state
rtm.on("enter-connected", function() {
    rtm.publish("your-channel", {key: "value"});
});

// client receives any PDU and PDU is passed as a parameter
rtm.on("data", function(pdu) {
    if (pdu.action.endsWith("/error")) {
        rtm.restart();
    }
});

// start the client
rtm.start();


function onMessageSend(data) {
    const message = {text: data};
    this._send((channelName) => updateMessage(channelName, message, user, data), 'bot_message');
}


function _send(message) {
    rtm.publish('channel', message);
}
