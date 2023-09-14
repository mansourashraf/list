
// document.addEventListener("DOMContentLoaded",function(){
// document.querySelectorAll("button").forEach(function(noble){

// noble.onclick = function (){
//     document.querySelector("#demo").style.color = noble.dataset.color;
// }


// })






// })





document.addEventListener("DOMContentLoaded", function(){


    document.querySelector("form").onsubmit = function (){
        var create = document.querySelector("#create").value;
        var result = document.querySelector("#result");
        if(create==""){
            return false;
        }else{
            var myLi = document.createElement("li");
            myLi.innerHTML = create;
            result.appendChild(myLi);
            document.querySelector("#create").value ="";
            return false;
        }
    }
}) 




