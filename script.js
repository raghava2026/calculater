;

const display=document.getElementById("display");

function appendvalue(input)
{
    if(display.value=='Error')
    {
        display.value="";
    }
    display.value +=input;
}

function cleardisplay(){
    display.value = " ";
}
function wrong()
{
    if(!display.value)
        return;
    if(display.value=="Error")
        display.value="";
    display.value=display.value.slice(0,-1);
    
}

function calculate(){
    if(!display.value)
        return;
    try{
        display.value=eval(display.value);

    }
    catch(error)
    {
        display.value="Error";
    }

}


document.addEventListener("keydown", (e) => {
  const k = e.key;

  if ((k >= "0" && k <= "9") || k === ".") {
    appendvalue(k);
    e.preventDefault();
    return;
  }

  if (["+", "-", "*", "/", "%"].includes(k)) {
    appendvalue(k);
    e.preventDefault();
    return;
  }

 
  if (k === "Enter") {
    calculate();
    e.preventDefault();
    return;
  }


  if (k === "Backspace") {
    wrong();
    e.preventDefault();
    return;
  }

  if (k === "Escape" || k === "Delete") {
    cleardisplay();
    e.preventDefault();
    return;
  }

});