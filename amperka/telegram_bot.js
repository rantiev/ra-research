var SSID = 'Rantiev';
var PASSWORD = '54be53ae';
var TOKEN = '5690939400:AAELsnQokUfaPKVIa3OREvXUKR6v9q4GxX4';

var led = require('@amperka/led').connect(P3);
var bot = require('@amperka/telegram').create({
  token: TOKEN,
  polling: { timeout: 10 }
});

bot.on('connect', function() {
  console.log('Connected');
});


bot.on('disconnect', function() {
  console.log('Disconnected');
});


bot.on('/TurnOff', function() {
  led.turnOff();
  bot.sendMessage(msg.from.id, 'Led Off');
});


bot.on('/start', function() {
  var keyboard = bot.keyboard([
    ['/TurnOff', '/TurnOn']
  ], { resize: true });

  console.log('Bot got start');

  bot.sendMessage(msg.from.id, 'Led control', {
    markup: keyboard
  });
});

bot.on('/TurnOff', function() {
  led.turnOff();
  bot.sendMessage(msg.from.id, 'Led Off');
});

bot.on('/TurnOn', function() {
  led.turnOn();
  bot.sendMessage(msg.from.id, 'Led On');
});

var wifi = require('@amperka/wifi').setup(function(err) {
  wifi.connect(SSID, PASSWORD, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to Wifi');
      bot.connect();
    }
  });
});