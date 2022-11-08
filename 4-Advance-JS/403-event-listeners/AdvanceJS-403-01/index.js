var KeyRef= document.getElementById("pressedKey");

KeyRef.addEventListener("keyup", function(e){
console.log(e);
var keyCodeRef= document.getElementById("keyCode");
keyCodeRef.innerText= e.keyCode;

KeyRef.value= e.key;
KeyRef.style.color= "green";
})
