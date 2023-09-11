var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "assets/images/sun.png";
    }else{
        icon.src = "assets/images/moon.png";

    }
}
