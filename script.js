const rectangle = document.getElementById("rectangle");
const changecolor = document.getElementById("changecolor");
const addchild = document.getElementById("addchild");
const removechild = document.getElementById("removechild");



changecolor.addEventListener("click", color);

function color() {
    if (rectangle.style.background == "green") {
        rectangle.style.background = "blue";
    } else {
        rectangle.style.background = "green";
    }
}
let i = 0;
addchild.addEventListener("click", add);

function add() {
    const newchild = document.createElement("div");
    newchild.id = "child" + i;
    newchild.style.background = "yellow";
    newchild.style.border = "2px solid black";
    newchild.style.height = "10vh";
    newchild.style.width = "10vh";
    rectangle.appendChild(newchild);
    i++;
}

removechild.addEventListener("click", remove)
function remove(){
    debugger
    const removediv = document.getElementById("child"+(i-1));
    removediv.remove();
    i--
}