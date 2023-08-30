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
for (let i = 0; i < outputElements.length; i++) {
    const button = document.getElementById('button' + (i + 1));
    button.addEventListener('click', async () => {
        const textArray = await loadJSON('array' + (i + 1) + '.json');
        const randomIndex = Math.floor(Math.random() * textArray.length);
        outputElements[i].textContent = textArray[randomIndex];
    });
}
