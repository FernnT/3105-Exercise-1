function inputname(){
    var name = prompt("Enter your name:");
    if(name != null){
        document.getElementById("Hello").innerHTML
        = "Hello, " + name + "!";
    }
}