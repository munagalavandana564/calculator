let operator='';
let firstnumber='';
let secondnumber='';
function appendnumber(num){
    if(operator===''){
        firstnumber +=num;
        document.getElementById('result').value=firstnumber;
    }else{
        secondnumber +=num;
        document.getElementById('result').value=secondnumber;
    }
}
function setOperator(op){
    operator=op;
}
function calculate(){
    let result;
    switch(operator){
        case '+':
        result=parseInt(firstnumber)+parseInt(secondnumber);
        break;
        case '-':
        result=parseInt(firstnumber)-parseInt(secondnumber);
        break;
        case '*':
        result=parseInt(firstnumber)*parseInt(secondnumber);
        break;
        case '/':
        result=parseInt(firstnumber)/parseInt(secondnumber);
        break;
        
    }
    document.getElementById('result').value=result;}

function clearresult(){
    operator='';
    let firstnumber='';
    let secondnumber='';
    document.getElementById('result').value='';
}