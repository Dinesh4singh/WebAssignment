var drumRef= document.querySelectorAll(".drum");
//console.log(drumRef);
for( var i=0; i<drumRef.length; i++){
    drumRef[i].addEventListener("click",function(){
        var buttonText= this.innerHTML;
       // console.log(buttonText);
       makesound(buttonText);
    })
}
document.addEventListener("keypress", function(e){
    makesound(e.key);
    
})
function makesound(buttonText){
    if(buttonText=="w"){
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    if(buttonText=="a"){
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    if(buttonText=="s"){
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    if(buttonText=="d"){
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    if(buttonText=="j"){
        var kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
    if(buttonText=="k"){
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
    }
    if(buttonText=="l"){
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
    }
}