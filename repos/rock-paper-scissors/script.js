window.onload = function() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }
    
    function updateDisplay(message, type = '') {
        const output = document.getElementById('output');
        if (!output) return;
        
        const messageElem = document.createElement('p');
        messageElem.textContent = message;
        messageElem.className = type; // 'win', 'lose', or 'tie'
        output.appendChild(messageElem);
        
        // Update scores
        document.getElementById('humanScore').textContent = humanScore;
        document.getElementById('computerScore').textContent = computerScore;
        document.getElementById('roundCount').textContent = round;
        
        // Auto-scroll
        output.scrollTop = output.scrollHeight;
    }
    
    window.playRound = function(humanChoice) {
        if (round > 5) {
            updateDisplay("🎮 Game over! Refresh page to play again.", 'tie');
            return;
        }
        
        const computerChoice = getComputerChoice();
        updateDisplay(`Round ${round}: You chose ${humanChoice.toUpperCase()}, Computer chose ${computerChoice.toUpperCase()}`);
        
        if (humanChoice === computerChoice) {
            updateDisplay("🤝 It's a tie!", 'tie');
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            updateDisplay(`✅ You win! ${humanChoice} beats ${computerChoice}`, 'win');
            humanScore++;
        } else {
            updateDisplay(`❌ You lose! ${computerChoice} beats ${humanChoice}`, 'lose');
            computerScore++;
        }
        
        round++;
        
        if (round > 5) {
            const finalDiv = document.createElement('div');
            finalDiv.className = 'final-result';
            
            if (humanScore > computerScore) {
                finalDiv.textContent = "🏆 CONGRATULATIONS! YOU WIN THE GAME! 🏆";
            } else if (computerScore > humanScore) {
                finalDiv.textContent = "💻 COMPUTER WINS! BETTER LUCK NEXT TIME!";
            } else {
                finalDiv.textContent = "🤝 IT'S A TIE GAME! WELL PLAYED!";
            }
            
            document.querySelector('.game-output').appendChild(finalDiv);
        }
    };
};