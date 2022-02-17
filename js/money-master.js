
function SavingExpenses(select1,select2){
      
     // First part Income Expenses



    const incomeInput=document.getElementById('income');
    const incomeInputValue=incomeInput.value;
    const incomeInputValueInt=parseInt(incomeInputValue);

    const foodInput=document.getElementById('food');
    const foodInputValue=foodInput.value;
    const foodInputValueInt=parseInt(foodInputValue);

    const rentInput=document.getElementById('rent');
    const rentInputValue=rentInput.value;
    const rentInputValueInt=parseInt(rentInputValue);

    const clothInput=document.getElementById('cloth');
    const clothInputValue=clothInput.value;
    const clothInputValueInt=parseInt(clothInputValue);

    if( incomeInputValueInt<0 || foodInputValueInt<0 || rentInputValueInt<0 || clothInputValueInt<0 ){
       
        const errorHandle=document.getElementById('error-handle');
        errorHandle.style.display='block';
    }
  
        else if(incomeInputValue=='' || foodInputValue=='' || rentInputValue=='' || clothInputValue==''){
            console.log('what is');
            const errorHandle=document.getElementById('error-handle');
            errorHandle.style.display='block';
        }
    
    else{
        const errorHandle=document.getElementById('error-handle');
        errorHandle.style.display='none';
        // error handeling 1st part

        // Total Expenses

    var frcTotal = foodInputValueInt + rentInputValueInt + clothInputValueInt;

    const totalExpenses=document.getElementById('total-expenses');
    totalExpenses.innerText=frcTotal;

        // Balance

    const balanceTk=document.getElementById('balance');
    var balanceAmount = incomeInputValueInt - frcTotal;
    balanceTk.innerText = balanceAmount;

    }

       // Error frcTotal>incomTotal
    if(frcTotal>incomeInputValueInt){
        const errorHandle2=document.getElementById('expenses-error-handle');
        errorHandle2.style.display='block';
    }else{
        const errorHandle2=document.getElementById('expenses-error-handle');
        errorHandle2.style.display='none';
    }


  
    // Saving Amount

    const saveMoney = document.getElementById(select1);
    const saveMoneyValue=saveMoney.value;
    const saveMoneyValueInt=parseInt(saveMoneyValue);
    let percentage = saveMoneyValueInt/100;
    let saveAmount = percentage*incomeInputValueInt;

    if(saveMoneyValueInt<0){
        const errorHandle4=document.getElementById('save-input');
        errorHandle4.style.display='block';

    }else{

        const errorHandle4=document.getElementById('save-input');
        errorHandle4.style.display='none';

    const savingTk=document.getElementById('saving-amount');
    savingTk.innerText=saveAmount;

    

      // Remaining Balance
        

      let remaningBalance = balanceAmount - saveAmount;
      const remaningBalanceShow=document.getElementById(select2+'-balance');
      remaningBalanceShow.innerText=remaningBalance;

      
      
      
        // Error saveAmount>balanceAmount

    if(saveAmount>balanceAmount){
        const errorHandle3=document.getElementById('saving-error-handle');
        errorHandle3.style.display='block';
    }else{
        const errorHandle3=document.getElementById('saving-error-handle');
        errorHandle3.style.display='none';
    }
   
}


}

document.getElementById('calculate-button').addEventListener('click',function(){

    SavingExpenses('dummy1','dummy2');
})



document.getElementById('save-button').addEventListener('click',function(){

    SavingExpenses('save','remaining');
})

