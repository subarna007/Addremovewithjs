var isStatus = document.querySelector("h5")
var btn = document.querySelector("#add")

var isStatus1 = document.querySelector("h4")
var btnn = document.querySelector("#addf")



var button = document.querySelector("#remove")
var check = 0

btnn.addEventListener ("click",function(){
    isStatus1.innerHTML = "Friends"
    isStatus1.style.color = "green"
})


btn.addEventListener ("click",function(){
    if (check == 0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        check = "1"
    }
    else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "Red"
        btn.innerHTML = "Add Friend"
        check = "0"
    }
    
})

button.addEventListener ("click",function(){
    isStatus1.innerHTML = "Stranger"
    isStatus1.style.color = "Red"
})