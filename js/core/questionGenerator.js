// js/core/questionGenerator.js
import { selectedOperators, difficulty } from './settingsManager.js';
import { questionEl, answerInput } from '../ui/elements.js';

export function generateQuestion() {
    const numRange = difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 50;
    const num1 = Math.floor(Math.random() * numRange) + 1;
    const num2 = Math.floor(Math.random() * numRange) + 1;
    const operator = selectedOperators[Math.floor(Math.random() * selectedOperators.length)];

    let correctAnswer;
    let latexExpression = `${num1} ${operator} ${num2}`;

    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "×":
            correctAnswer = num1 * num2;
            break;
        case "÷":
            correctAnswer = (num1 / num2).toFixed(2);
            break;
    }
    

    questionEl.dataset.answer = correctAnswer;
    katex.render(latexExpression, questionEl, { throwOnError: false });
    answerInput.value = "";
    answerInput.classList.remove("correct-border", "incorrect-border");
}