var rtm = new RTM("wss://xvlhsogc.api.satori.com", "DE2aC81E2A9a630Cc9e6ebFC3fDeB896");

// create a new subscription with "your-channel" name
var channel = rtm.subscribe("your-channel", RTM.SubscriptionMode.SIMPLE);
// add channel data handlers

// channel receives any published message
channel.on("rtm/subscription/data", function(pdu) {
    pdu.body.messages.forEach(function (t) {
        console.log("Message:" + t);
    });
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


function onMessageSend(channel, data) {
    this._send(channel, data);
    console.log(data)
}


function _send(channel, message) {
    rtm.publish(channel, message);
}
