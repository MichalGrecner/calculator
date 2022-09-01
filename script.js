let memory=[]; //
let num;
let operation;
let operationMemory;
let canOperate = false;


const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn){
    btn.addEventListener("click", () => {
        //resets CSS styles of operator buttons
        buttons.forEach(function (btn){
            if(btn.getAttribute("class").includes("operator")){
            btn.setAttribute("style", "background-color:rgb(240, 160, 84)")
            }
        })
        
        console.log("can Operate: "+canOperate)
        if( btn.getAttribute("class").includes("num")){
            canOperate = true;
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
            
        }else if(btn.getAttribute("class").includes("operator")&& canOperate === true){
            canOperate = false;
            if(btn.getAttribute("class").includes("plusMinus")){
                num = Number(num) * -1
                display(num)
            }
            if(btn.getAttribute("class").includes("equal")){
                if(memory.length === 2){
                    console.log("EQUAL IF")
                    console.log(memory.length)
                    
                } else{
                    console.log("EQUAL ELSE")
                    console.log(memory.length)
                   
                }
            }else if( operation === undefined){
                operation = btn.innerHTML;
                tagButton(btn) 
            
            } else {
                operationMemory = btn.innerHTML;
                tagButton(btn)
            }
            console.log("memory.push")
            memory.push(Number(num));
            num = undefined;
            if(memory.length == 2){
                console.log("count " + operation)
                count()
            }
        } else if (btn.getAttribute("class").includes("clear")){
            //CLEAR function
            memory = [];
            num = operation = operationMemory = undefined
            display(" ")
        }

        
      
    })
}
)

function count(){

    console.log("fce count - memory0: "+ memory[0])
    console.log("fce count - memory1: "+ memory[1])
   
    console.log("fce count - operation: " + operation)
    console.log("fce count - operationMemory: " + operationMemory)
   
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

function tagButton(btn){
    btn.setAttribute("style", "background-color:white")
    

}

//TODO: 
// 1. When tapped 2x operation button
// 2. Long decimal numbers precision
// 3. graphics display 
// 4. negative number



