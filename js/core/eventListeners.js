import { questionEl, answerInput, submitBtn, settingsBtnTop, settingsMenu, sidebarToggleBtn } from '../ui/elements.js'; // Updated import to include settingsBtnTop and sidebarToggleBtn
import { generateQuestion } from './questionGenerator.js';
import { showFloatingResult } from './uiFeedback.js';

export function setupEventListeners() {
    submitBtn.addEventListener("click", () => {
        let userAnswer = answerInput.value.trim().replace(",", ".");
        if (userAnswer === "") {
            showFloatingResult("⚠️ Please enter an answer!", false);
            answerInput.focus();
            return;
        }

        const correctAnswer = parseFloat(questionEl.dataset.answer);
        if (parseFloat(userAnswer) === correctAnswer) {
            showFloatingResult("✅ Correct! 🎉", true);
            answerInput.blur();
            answerInput.classList.add("correct-border");
            setTimeout(() => {
                answerInput.classList.remove("correct-border");
                answerInput.focus();
                generateQuestion();
            }, 1000);
        } else {
            showFloatingResult(`❌ Incorrect! The answer was ${correctAnswer}`, false);
            answerInput.blur();
            answerInput.classList.add("incorrect-border");
            answerInput.value = "";
            setTimeout(() => {
                answerInput.classList.remove("incorrect-border");
                answerInput.focus();
            }, 1500);
        }
    });

    answerInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            submitBtn.click();
        }
    });

    settingsBtnTop.addEventListener("click", () => { // Event listener for top settings button
        settingsMenu.classList.toggle("visible");
    });

    sidebarToggleBtn.addEventListener("click", () => { // Event listener for sidebar toggle button
        document.body.classList.toggle("sidebar-collapsed");
    });


    document.addEventListener("click", (event) => {
        if (!settingsMenu.contains(event.target) && event.target !== settingsBtnTop) { // Updated to settingsBtnTop
            settingsMenu.classList.remove("visible");
        }
    });
}