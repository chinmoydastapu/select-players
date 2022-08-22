// Selection V section starts here
// Get player name via selection button
function getPlayerName(btnId, nameElementId) {
    const btnElement = document.getElementById(btnId);
    const nameElement = document.getElementById(nameElementId);
    const name = nameElement.innerText;
    //disabling the corresponding selection button
    btnElement.setAttribute('disabled', true);
    
    return name;
}

// Adding the name into Selection-V section
let countSelection = 0;
function addNames(btnId, nameElementId) {
    if((countSelection+1) > 5) {
        return alert("Selection limit exceeded!!!!\nYou've already selected 5 players!!");
    }
    countSelection++;
    const p = document.createElement('p');
    p.innerText = countSelection + '. ' + getPlayerName(btnId, nameElementId);

    const selectionElement = document.getElementById('selected-player-names');
    selectionElement.appendChild(p);
}
// Selection V section ends here

//Budget Section starts here
// Getting values of an input field
function getInputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;

    return inputFieldValue;
}