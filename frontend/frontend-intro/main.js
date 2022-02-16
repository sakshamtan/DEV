(function(){  // saara code IIFE ke andar likhne se namespace pollution nhi hota

    let btn = document.querySelector("#first-btn");
    let h1 = document.querySelector("h1");

    btn.addEventListener("click", function(){
        h1.style.color = "green";
    });

    btn.addEventListener("mouseover", function(){
        h1.style.color = "black";
    });

    btn.addEventListener("mouseout", function(){
        h1.style.color = "red";
    });

})();