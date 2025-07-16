function init(){
    let element = document.getElementById("intro-button");
    element.addEventListener('click',function(){
        location.href = "/pages/about.html";
    });

    
}

window.addEventListener('DOMContentLoaded', init);