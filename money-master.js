
function SavingExpenses(){
      
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
        console.log('string int');
        const errorHandle=document.getElementById('error-handle');
        errorHandle.style.display='block';
    }else{
        const errorHandle=document.getElementById('error-handle');
        errorHandle.style.display='none';
        // error handeling 1st part

        // Total Expenses

    let frcTotal = foodInputValueInt + rentInputValueInt + clothInputValueInt;

    const totalExpenses=document.getElementById('total-expenses');
    totalExpenses.innerText=frcTotal;

        // Balance

    const balanceTk=document.getElementById('balance');
    var balanceAmount = incomeInputValueInt - frcTotal;
    balanceTk.innerText = balanceAmount;

    }
  
   

    const saveMoney = document.getElementById('save');
    const saveMoneyValue=saveMoney.value;
    const saveMoneyValueInt=parseInt(saveMoneyValue);
    let percentage = saveMoneyValueInt/100;
    let saveAmount = percentage*incomeInputValueInt;


    const savingTk=document.getElementById('saving-amount');
    savingTk.innerText=saveAmount;

      // Remaining Balance
        console.log(balanceAmount);

      let remaningBalance = balanceAmount - saveAmount;
      const remaningBalanceShow=document.getElementById('remaining-balance');
      remaningBalanceShow.innerText=remaningBalance;



}

document.getElementById('calculate-button').addEventListener('click',function(){

    SavingExpenses();
})



document.getElementById('save-button').addEventListener('click',function(){

    SavingExpenses();
})

/*

//1st part

document.getElementById('calculate-button').addEventListener('click',function(){
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

    let frcTotal = foodInputValueInt + rentInputValueInt + clothInputValueInt;

    const totalExpenses=document.getElementById('total-expenses');
    totalExpenses.innerText=frcTotal;

    const balanceTk=document.getElementById('balance');
    const balanceAmount = incomeInputValueInt - frcTotal;
    balanceTk.innerText = balanceAmount;



})


    //2nd part

document.getElementById('calculate-button').addEventListener('click',function(){

const incomeInput=document.getElementById('income');
const incomeInputValue=incomeInput.value;
const incomeInputValueInt=parseInt(incomeInputValue);

const saveMoney = document.getElementById('save');
const saveMoneyValue=saveMoney.value;
const saveMoneyValueInt=parseInt(saveMoneyValue);
let percentage = saveMoneyValueInt/100;
let saveAmount = percentage*incomeInputValueInt;
console.log(saveAmount);

const savingTk=document.getElementById('saving-amount');
savingTk.innerText=saveAmount;



})    

*/