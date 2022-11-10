function fn(){
    var pRef= document.createElement("p");
    var imgRef= document.createElement("img");
    pRef.innerText= "Image Element Added";
    pRef.style.color= "green";
    pRef.style.fontWeight= "bolder";
    imgRef.src= "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
    document.getElementById("output").appendChild(pRef);
    document.getElementById("output").appendChild(imgRef);
}
