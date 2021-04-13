// Create a client instance
 //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
 
 client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
 
 // set callback handlers
 client.onConnectionLost = onConnectionLost;
 client.onMessageArrived = onMessageArrived;
 var options = {
 useSSL: false,
 userName: "javier230895@gmail.com",
 password: "audio123",
 onSuccess:onConnect,
 onFailure:doFail
 }
 // connect the client
 client.connect(options);
 
 // called when the client connects
 function onConnect() {
 // Once a connection has been made, make a subscription and send a message.
 console.log("Conectado...");
 client.subscribe("javier230895@gmail.com/test");
 message = new Paho.MQTT.Message("Conectado al servidor NTP");
 message.destinationName = "javier230895@gmail.com/test2";
 client.send(message);
 }
 function doFail(e){
 console.log(e);
 }
 // called when the client loses its connection
 function onConnectionLost(responseObject) {
 if (responseObject.errorCode !== 0) {
 }
 }
 // called when a message arrives
 function onMessageArrived(message) {
 Mensaje=message.payloadString;
 console.log(Mensaje);
 S1=document.getElementById("sensor")
 S2=document.getElementById("sensor1")
 S3=document.getElementById("sensor2")
 S1.innerHTML=" "+Mensaje.split(":")[0];
 S2.innerHTML=" "+Mensaje.split(":")[1];
 S3.innerHTML=" "+Mensaje.split(":")[2];
 }
