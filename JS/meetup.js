function subscribeToMeetUp() {
    var rtm = new RTM("wss://open-data.api.satori.com", "2d2EA104068cfeEA9D39CB4F3FD1DABB");

    var channel = rtm.subscribe('meetups', RTM.SubscriptionMode.SIMPLE, {
        filter: 'SELECT * FROM meetup WHERE type = "rsvp"'
    });

    channel.on('enter-subscribed', function () {
        console.log('Subscribed to: ' + channel.subscriptionId);
    });

    channel.on('rtm/subscription/data', function (pdu) {
        pdu.body.messages.forEach(function (msg) {
            console.log('Got message:', msg);
            document.getElementById("container-suggestions").innerHTML="It's going to be sunny outside! Pack a bottle of water!";
        });
    });

    rtm.start()
}
