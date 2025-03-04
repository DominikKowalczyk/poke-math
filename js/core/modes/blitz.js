// In your game logic file
const CORRECT_ANSWER_BONUS = 2000; // 2 seconds
const WRONG_ANSWER_PENALTY = 3000; // 3 seconds

function handleCorrectAnswer() {
    gameTimer.addTime(CORRECT_ANSWER_BONUS);
    showFloatingResult("✅ Correct! +2s 🎉", true);
    // ... rest of your correct answer handling
}

function handleWrongAnswer() {
    gameTimer.subtractTime(WRONG_ANSWER_PENALTY);
    showFloatingResult("❌ Incorrect! -3s", false);
    // ... rest of your wrong answer handling
}