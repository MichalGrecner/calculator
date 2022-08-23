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
            }else{
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
            memory.push(parseInt(num));
            num = undefined;
            if(memory.length == 2){
                console.log("count " + operation)
                count()
            }
        }

        
        console.log("num: " + num);
        console.log("memory: " + memory)
        console.log("operation: " + operation)
        console.log("operationMemory: " + operationMemory)
    })
}
)

function count(){
   
    const operations = {
        "+": memory[0] + memory[1],
        "-": memory[0] - memory[1],
        "X": memory[0] * memory[1],
        "/": memory[0] / memory[1],
        "x&#178": memory[0] ** memory[1],
        "&#178&#8730x": Math.pow(memory[1], 1/memory[0]),
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

//TODO: CL, =, x^2, x root y, change symbols on buttons



