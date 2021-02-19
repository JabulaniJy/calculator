var updateExpression
createExpresssion =(btnChar)=>{
    var currentExppression= document.getElementsByTagName('p')[0].innerHTML;
        //if btnchar is nan check is == to last character of
    if(isNaN(btnChar)==false){
        updateExpression=currentExppression.concat(btnChar);
        document.getElementsByTagName('p')[0].innerHTML=updateExpression;  
    }else{
        var lastChar = currentExppression.substring(currentExppression.length-1,currentExppression.length);
 
        if(lastChar==btnChar){
            null;
        }else if(lastChar!=btnChar && isNaN(lastChar)){
            updateExpression=currentExppression.slice(0, currentExppression.length - 1);
            document.getElementsByTagName('p')[0].innerHTML=updateExpression.concat(btnChar);  
        }else{
            updateExpression=currentExppression.concat(btnChar);
            document.getElementsByTagName('p')[0].innerHTML=updateExpression;  
        }
    }   
}//end create expression

cls=()=>{
    updateExpression='';
    document.getElementsByTagName('p')[0].innerHTML=updateExpression;  
}

back=()=>{
    updateExpression=updateExpression.slice(0, updateExpression.length - 1);
    document.getElementsByTagName('p')[0].innerHTML=updateExpression;  
}

evaluateExpression=()=>{
    let ans=eval(updateExpression)
    document.getElementsByTagName('p')[0].innerHTML=ans; 
}