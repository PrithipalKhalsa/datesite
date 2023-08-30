// script.js
const outputElements = [
    document.getElementById('output1'),
    document.getElementById('output2'),
    document.getElementById('output3')
];

// Function to fetch and load JSON data
async function loadJSON(url) {
    const response = await fetch(url);
    return response.json();
}

// Event listeners for buttons
// Modify the event listeners in your script.js as follows

for (let i = 0; i < outputElements.length; i++) {
    const button = document.getElementById('button' + (i + 1));
    button.addEventListener('click', async () => {
        const textArray = await loadJSON('text' + (i + 1) + '.json');
        const randomIndex = Math.floor(Math.random() * textArray.length);

        // Apply the roll-text class before changing the content
        outputElements[i].classList.add('roll-text');

        // Set the new content after a delay to allow animation
        setTimeout(() => {
            outputElements[i].textContent = textArray[randomIndex];
            // Remove the roll-text class after the animation
            outputElements[i].classList.remove('roll-text');
        }, 1000); // Adjust the delay as needed
    });
}
