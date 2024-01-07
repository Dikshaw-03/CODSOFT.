let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == "="){
            string = String(eval(string)) 
            // above will eval expression in string 
            inputBox.value = string;
            // in above value cuz it is input tag  
        } 
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0, string.length -1)
            inputBox.value = string
        }
        else if(b.target.id == 'plusMinus'){
            // it will evaluate and also change sign 
            string = String(-eval(string))
            inputBox.value = string
        }
        else {
            string += b.target.innerText
            inputBox.value = string
        } 
    })
})

