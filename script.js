let memory=[]; //
let num
let operation;
let operationMemory;

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn){
    btn.addEventListener("click", () => {
        if( btn.getAttribute("class").includes("num")){
            if(typeof num ==="undefined"){
                num = String(btn.innerHTML)
                display(num)
            }
            else if (num.includes(".") &&  btn.getAttribute("class").includes("decSep")){
                //pass
            }
            else{
                num += String(btn.innerHTML);
                display(num)
            }
            
        }else if(btn.getAttribute("class").includes("operator")){
            if( operation === undefined){
                operation = btn.innerHTML;
                display(operation)
            } else {
                operationMemory = btn.innerHTML;
                display(operationMemory)
            }
            memory.push(
                Number(num));
            num = undefined;
            if(memory.length == 2){
                console.log("count " + operation)
                count()
            }
        } else {
            //CLEAR function
            memory = [];
            num = operation = operationMemory = undefined
            display(" ")
        }

        
        console.log("num: " + num);
        console.log("memory: " + memory)
        console.log("operation: " + operation)
        console.log("operationMemory: " + operationMemory)
    })
}
)

function count(){

    console.log("fce count - memory0: "+ memory[0])
    console.log("fce count - memory1: "+ memory[1])
    console.log("fce count - memory0type of: "+ typeof memory[0])
    console.log("fce count - memory1type of: "+ typeof memory[1])
   
    const operations = {
        "+": memory[0] + memory[1],
        "-": memory[0] - memory[1],
        "x": memory[0] * memory[1],
        "/": memory[0] / memory[1],
        "<var>x<sup>y</sup></var>": memory[0] ** memory[1],
        "<var><sup>y</sup></var>√x": Math.pow(memory[1], 1/memory[0]),
    }
    
    console.log("Výsledek: "+ operations[operation])
    display(operations[operation])
    memory[0]=(operations[operation])
    memory.pop()
    operation = operationMemory;
   
    

}

function display(value){
    let dispNum =  document.querySelector(".dispValue")
    dispNum.innerHTML = value;
}

//TODO: diplay graphic + max nm of digits on display, numbers with decimal point, allow only one decimal point



