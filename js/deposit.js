
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('depositField');
    if (isNaN(newDepositAmount)) {
        alert('Wrong input!');
        return;
    }
    const previousTotalDepositAmout = getElementValueById('totalDeposit');
    const newDepositTotal = previousTotalDepositAmout + newDepositAmount;
    setElemnetValueUsingId('totalDeposit', newDepositTotal);


    const previousTotalBalance = getElementValueById('totalBalance');
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setElemnetValueUsingId('totalBalance', newTotalBalance);

});
