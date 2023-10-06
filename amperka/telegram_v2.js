var SSID = 'XXXX'
var PASSWORD = 'xxxx'
var MQTT_HOST = '192.168.100.3'
var TOPIC = 'led/'

var led = require('@amperka/led').connect(P6)
var tmp = require('@amperka/thermometer').connect(A4)
var light = require('@amperka/light-sensor').connect(A3)

var wifi = require('@amperka/wifi').setup(function (err) {
  wifi.connect(SSID, PASSWORD, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Connected to Wifi')
      mqttConnect()
    }
  })
})

function mqttConnect() {
  mqtt = require('MQTT').connect({
    host: MQTT_HOST
  })
  mqtt.on('connected', function () {
    console.log('MQTT connected')
    mqtt.subscribe(TOPIC + 'set')
    mqtt.subscribe('t')
    mqtt.subscribe('l')
  })
  mqtt.on('disconnected', function () {
    console.log('MQTT disconnected')
  })
  mqtt.on('publish', function (pub) {
    // console.log('s', pub.topic);

    if (pub.topic == TOPIC + 'set') {
      var message = JSON.parse(pub.message)
      // console.log('m', message);

      if (message.content == 'On') {
        led.turnOn()
        message.content = 'LED is turned on'
      } else if (message.content == 'Off') {
        led.turnOff()
        message.content = 'LED is turned off'
      } else {
        var t = tmp.read('C').toFixed(1)
        var l = light.read('lx').toFixed(1)
        var s = 'Temperature is: ' + t + ' C' + '\n' + 'Light is: turned ' + (l > 3 ? 'on' : 'off')
        //console.log(s);

        message.content = s
      }

      mqtt.publish(TOPIC + 'status', JSON.stringify(message))
    }
  })
}