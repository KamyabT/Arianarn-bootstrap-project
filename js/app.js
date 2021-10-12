

/******************Total Income Calculatiom******************/

function calculation(){
    let values = 0;
    const selectors = document.querySelectorAll("li.incomeItem span");
    for (let i = 0; i < selectors.length; i++){
        let rawVal = selectors[i].innerHTML.toString();
        values += parseInt(rawVal.slice(1));
    }
    document.getElementById("totalIncomeCalculation").innerHTML = "$" + values;
}

window.onload = calculation;




