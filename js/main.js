var button = document.getElementById("button");
var spinner = document.getElementById("spinner-border");

button.addEventListener("click" , function(){
    spinner.style.display = "inline-block";
    setTimeout(function(){
        spinner.style.display = "none";
    },10000);
});