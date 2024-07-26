const display = document.getElementById("Display");

function appendToDisplay(input){
    Display.value += input;
 
}

function clearDisplay(){
    Display.value = "";

}

function calculate(){
    
    try{
        Display.value = eval(display.value);
    }
    catch(error){
        Display.value = "Error";
    }
    
}
function deleteLastCharacter(){
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}

function calculate(){
    try{
        if (display.value === '1+') {
            display.value = "Never Settle";
        } else {
            display.value = eval(display.value);
        }
    }
    catch(error){
        display.value = "Error";
    }
}

if (display.textContent === 'Never Settle') {
    display.style.color = 'red';
  }