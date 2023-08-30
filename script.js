const outputElement = document.getElementById('output');

// Function to fetch and load JSON data
async function loadJSON(url) {
    const response = await fetch(url);
    return response.json();
}

// Event listeners for buttons
document.getElementById('button1').addEventListener('click', async () => {
    const textArray = await loadJSON('array1.json');
    const randomIndex = Math.floor(Math.random() * textArray.length);
    outputElement.textContent = textArray[randomIndex];
});

document.getElementById('button2').addEventListener('click', async () => {
    const textArray = await loadJSON('array2.json');
    const randomIndex = Math.floor(Math.random() * textArray.length);
    outputElement.textContent = textArray[randomIndex];
});

document.getElementById('button3').addEventListener('click', async () => {
    const textArray = await loadJSON('array3.json');
    const randomIndex = Math.floor(Math.random() * textArray.length);
    outputElement.textContent = textArray[randomIndex];
});
