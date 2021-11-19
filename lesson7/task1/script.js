function fill() {
    let elements = document.querySelectorAll('li');
    for(let i=0;i<elements.length;i++){
        elements[i].innerHTML=makeid();
    }
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
function allElements(){
    let allElems = document.querySelectorAll('li')
    var tag = document.createElement("p");
   var text = document.createTextNode(allElems.length);
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);
}
    
