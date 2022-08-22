// Player Expenses Calculation
let playerExpenses;
document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputFieldValue = getInputFieldValue('per-player-input-field');
    const playerExpensesElement = document.getElementById('player-expenses');

    //Storing the player expense value for using it in total calculation
    playerExpenses = countSelection * inputFieldValue;
    if (!isNaN(inputFieldValue) && inputFieldValue >= 0 && inputFieldValue !== '') {
        playerExpensesElement.innerText = playerExpenses;
    } else {
        alert('INVALID INPUT on Per Player field\nPlease Enter a Positive Number!!!');
    }
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getInputFieldValue('manager-input-field');
    const coachCost = getInputFieldValue('coach-input-field');

    const totalCost = parseInt(playerExpenses) + parseInt(managerCost) + parseInt(coachCost);

    //Adding the total cost into total expenses field
    const totalExpensesElement = document.getElementById('total-expenses');
    if (!isNaN(managerCost) && !isNaN(coachCost) && managerCost >= 0 && coachCost >= 0 &&
        managerCost !== '' && coachCost !== '') {
        totalExpensesElement.innerText = totalCost;
    } else {
        alert('INVALID INPUT on Manager/Coach field\nPlease Enter a Positive Number!!!');
    }
});