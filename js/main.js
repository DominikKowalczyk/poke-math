import { generateQuestion } from './core/questionGenerator.js';
import { setupEventListeners } from './core/eventListeners.js';
import { setupSettings } from './core/settingsManager.js';

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    setupSettings();
    generateQuestion();
});