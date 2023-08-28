const  createbtn = document.querySelector(".createbtn");
const  paracontainer = document.querySelector(".para-container");
let notes = document.querySelectorAll(".notes");

createbtn.addEventListener("click", ()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "notes";
    p.setAttribute("contenteditable","true");
    p.setAttribute("resize","none");
    img.src = "images/delete.png";
    paracontainer.appendChild(p).appendChild(img);
    update();
})
paracontainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName == "P"){
     notes = document.querySelectorAll(".notes");
        notes.forEach(n =>{
            n.onkeyup = function(){
                update();
            }
        })
    }

})

function updae(){
    localStorage.setItem("data",paracontainer.innerHTML);
}
function show(){
    paracontainer.innerHTML = localStorage.getItem("data");
}
show();
