// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var variables="-",informacion;
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
  
    client.subscribe("javier230895@gmail.com/test2");
  
  
  }

  function doFail(e){
    console.log(e);
	
  } 

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    var le=document.getElementById("Sensor");
    var l=document.getElementById("Sensor1");
    console.log("onMessageArrived:"+message.payloadString);
    variables=(message.payloadString).split(("-"));
  }
  function Sens1(){
    var dat=document.getElementById("info");
    dat.innerHTML="";
    dat.innerHTML=variables[0];
  }
  function Sens2(){
    var dat=document.getElementById("info");
    dat.innerHTML="";
    dat.innerHTML=variables[1];
  }
