//login btn handalar

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction");
    transactionArea.style.display = "block";
})

// // deposit btn handalar
// const depositBtn = document.getElementById("addDeposit");
// depositBtn.addEventListener("click", function(){
//     const depositAmount = document.getElementById("depositAmount").value
//     const depositNumber = parseFloat(depositAmount);
//     document.getElementById("depositAmount").value = "";

//     const currentDeposit = document.getElementById("currentDeposit").innerText;
//     const currentDepositNumber = parseFloat (currentDeposit);
//     const totalDeposit = depositNumber + currentDepositNumber;
//     document.getElementById("currentDeposit").innerText = totalDeposit;


//     const currentBalance = document.getElementById("currentBalance").innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalBalance = depositNumber + currentBalanceNumber;
//     document.getElementById("currentBalance").innerText = totalBalance;


// })




//code repied korta hoba na

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    // const depositAmount = document.getElementById("depositAmount").value
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");
    document.getElementById("depositAmount").value = "";


    function updateSpanText(id , depositNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = depositNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }
    

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);



   // window button handler

   const windowBtn = document.getElementById("addWithdraw");
   windowBtn.addEventListener("click", function(){
       const withdrawNumber = getInputNumber("withdrawAmount");
    //    const windowNumber = parseFloat(withdrawAmount);
        updateSpanText("currentWithdraw", withdrawNumber); 
        document.getElementById("withdrawAmount").value = ""; 
        updateSpanText("currentBalance", -1 * withdrawNumber);

   })
   function getInputNumber(id){
       const amount = document.getElementById(id).value;
       const amountNumber = parseFloat(amount);
       return amountNumber;
   }
})

