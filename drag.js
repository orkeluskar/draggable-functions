// Signature of the functions
const add = (x, y) => x + y

const subtract = (x, y) => x - y

const foo = (x, y, z) => x + y - z

const doSomethingComplicated = (x) =>  x + 1

//List of functions known
const listOfFunctions = [add, subtract, foo, doSomethingComplicated]

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

//on drop, adding empty divs according to functions args length
const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);

    //Empty div to append function name and empty divs according to args length
    let div = document.createElement("div");
    div.className = "space-evenly"
    div.appendChild(nodeCopy)

    listOfFunctions.map(func => {
        if (func.name === nodeCopy.id){
            for (i = 0; i < func.length; i++){
                let divChild = document.createElement("div");
                divChild.className = "empty-args"
                div.appendChild(divChild)
            }
        }
    });

    ev.target.appendChild(div);
}