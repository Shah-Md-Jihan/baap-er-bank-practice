
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const previousTotalBalance = getElementValueById('totalBalance');
    const newWithdrawAmount = getInputValueById('withdrawField');

    if (isNaN(newWithdrawAmount)) {
        alert('Wrong input!');
        return;
    }
    else {
        if (previousTotalBalance >= newWithdrawAmount) {
            const previousWithdrawAmount = getElementValueById('totalWithdraw');
            const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
            setElemnetValueUsingId('totalWithdraw', newWithdrawTotal);
            const newTotalBalance = previousTotalBalance - newWithdrawAmount;
            setElemnetValueUsingId('totalBalance', newTotalBalance);
        }
        else {
            alert('Insuficient Balance');
        }
    }
});