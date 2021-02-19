var updateExpression

createExpresssion =(btnChar)=>{

    var currentExppression= document.getElementsByTagName('p')[0].innerHTML;
  
    //check if btnChar is nan
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
    
    //let ans=eval(updateExpression)
    //console.log(ans);
        //else do nothing
}//end create expression

evaluateExpression=()=>{
    console.log(updateExpression)
    let ans=eval(updateExpression)
    document.getElementsByTagName('p')[0].innerHTML=ans; 
}