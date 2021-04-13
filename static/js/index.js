// called when a message arrives
  function onMessageArrived(message) {
    var le=document.getElementById("Sensor");
    var l=document.getElementById("Sensor1");
    console.log("onMessageArrived:"+message.payloadString);
    variables=(message.payloadString).split(("/"));
  }
  function mostrard(){
    var dat=document.getElementById("info");
    dat.innerHTML=variables[0];
  }
  function mostrar2(){
    var dat=document.getElementById("info");
    dat.innerHTML=variables[1];
  }
