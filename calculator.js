
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ["%","/","*","+","=","-"];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if(btnValue === "=" && output !== ""){
        // if output has '%' replace with "/100" before evaluating 
        output = eval(output.replace("%","/100"));
    }else if (btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        // if DEL button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    }else{
        // if output is empty and button in specialchars then return
        if(output === "" && specialChars.includes(btnValue))return;
        output += btnValue;
    }
    display.value = output;
};
// AddEventListener to each button, call calculate() onclick
buttons.forEach((button) => {
    // each button clciked listens to call function call "calculate() with dataset" value as argument
    button.addEventListener('click',(e) => calculate(e.target.dataset.value));
});