function changeColor(){
  var divElement1=document.getElementById("d1");
    var divElement2=document.getElementById("d2");
  divElement1.className= 'lightback'
  divElement2.className= 'blackback'
    var ctx = divElement1.getContext("2d"); ctx.clearRect(0,0,divElement1.width,divElement1.height);
}
function doRed(){
    var divElement1=document.getElementById("d1");
  divElement1.style.backgroundColor = 'Red'
    var ctx = divElement1.getContext("2d"); ctx.clearRect(0,0,divElement1.width,divElement1.height);
}

function doPink(){
   var divElement1=document.getElementById("d1"); 
  divElement1.style.backgroundColor = 'Pink'
    var ctx = divElement1.getContext("2d"); ctx.clearRect(0,0,divElement1.width,divElement1.height);
}

function  reset(){
    var divElement1=document.getElementById("d1");
    var divElement2=document.getElementById("d2");
  divElement1.style.backgroundColor = ''
  divElement1.className = 'blackback';
  divElement2.className = 'yellowback';
}


function doGreen(){
   var divElement1=document.getElementById("d1"); 
  divElement1.style.backgroundColor = 'Green';
 var ctx = divElement1.getContext("2d");
  ctx.fillStyle = 'Blue';
  ctx.fillRect(10,10, 50,50);
  ctx.fillRect(70,20, 50,50);
  
  ctx.fillStyle= 'black';
  ctx.font = '20px Arial';
  ctx.fillText("Hi", 15,45);
}


function doOrange(){
  var divElement1=document.getElementById("d1");
  var ctx = divElement1.getContext("2d"); ctx.clearRect(0,0,divElement1.width,divElement1.height);
  divElement1.style.backgroundColor = 'white';
}