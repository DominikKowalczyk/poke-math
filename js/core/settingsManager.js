import { operatorCheckboxes, difficultySelect } from '../ui/elements.js';
import { generateQuestion } from './questionGenerator.js';

export let selectedOperators = ["+", "-", "×", "÷"];
export let difficulty = "easy";

export function setupSettings() {
    operatorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            selectedOperators = Array.from(operatorCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            if (selectedOperators.length === 0) {
                selectedOperators = ["+", "-", "×", "÷"];
            }
            generateQuestion();
        });
    });

    difficultySelect.addEventListener("change", (event) => {
        difficulty = event.target.value;
        generateQuestion();
    });
}