const popup = document.getElementById('popup-overlay');
const popGame = document.getElementById('pop-game-name');
const popPrize = document.getElementById('pop-prize-amount');

/**
 * Opens the popup with specific game data
 * Hardcoded values are passed here via the HTML onclick attributes
 */
function openPopup(gameName, prizeAmount) {
    popGame.innerText = gameName;
    popPrize.innerText = prizeAmount;
    popup.style.display = 'flex';
}

/**
 * Closes the popup
 */
function closePopup() {
    popup.style.display = 'none';
}

// Close popup if user clicks the dark overlay area
window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}