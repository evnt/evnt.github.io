var rtm = new RTM("wss://open-data.api.satori.com", "2d2EA104068cfeEA9D39CB4F3FD1DABB");

var channel = rtm.subscribe("your-channel", RTM.SubscriptionMode.SIMPLE);
