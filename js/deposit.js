document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('get-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    depositField.value = '';

})