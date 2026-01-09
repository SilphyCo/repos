// Recipe Statistics Calculator
console.log("🍳 Recipe Manager Loaded!");

// Dynamic recipe counter
const recipeCards = document.querySelectorAll('.ingredient-group');
const recipeCountElement = document.querySelector('.stat p');
recipeCountElement.textContent = recipeCards.length;

// Last visited tracker
const lastVisit = localStorage.getItem('lastVisit');
const now = new Date().toLocaleDateString();

if (lastVisit) {
    console.log(`Welcome back! Last visited: ${lastVisit}`);
} else {
    console.log("First time visitor! Welcome! 👋");
}
localStorage.setItem('lastVisit', now);

// Cooking time calculator
function calculateTotalTime() {
    const times = [30, 25, 35]; // Spaghetti, Pizza, Katsu times
    const totalTime = times.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / times.length);
    
    console.log(`⏱️ Average cooking time: ${averageTime} minutes`);
    return averageTime;
}

calculateTotalTime();

// Page load timestamp
const loadTime = new Date().toLocaleTimeString();
console.log(`📄 Page loaded at: ${loadTime}`);