// Player Expenses Calculation
document.getElementById('calculate-btn').addEventListener('click', function() {
    const inputFieldValue = getInputFieldValue('per-player-input-field');
    const playerExpensesElement = document.getElementById('player-expenses');
    if(!isNaN(inputFieldValue) && inputFieldValue >= 0) {
        playerExpensesElement.innerText = countSelection * inputFieldValue;
    } else {
        alert('INVALID INPUT: Please Enter a Positive Number!!!')
    }
});