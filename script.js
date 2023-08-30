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
        const textArray = await loadJSON('text' + (i + 1) + '.json');
        const randomIndex = Math.floor(Math.random() * textArray.length);

        // Apply the roll-text class before changing the content
        outputElements[i].classList.add('roll-text');

        // Set the new content after animation completes
        setTimeout(() => {
            // Remove the roll-text class to stop animation
            outputElements[i].classList.remove('roll-text');

            // Roll a second time with a longer animation
            setTimeout(() => {
                outputElements[i].classList.add('roll-text');
                setTimeout(() => {
                    outputElements[i].classList.remove('roll-text');
                    // Set the final content after the animation
                    setTimeout(() => {
                        outputElements[i].textContent = textArray[randomIndex];
                    }, 200); // Adjust the delay as needed
                }, 1500); // Adjust the delay as needed
            }, 500); // Adjust the delay as needed
        }, 1000); // Adjust the delay as needed
    });
}
