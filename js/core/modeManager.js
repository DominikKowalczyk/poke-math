import {
    relaxedModeBtn,
    blitzModeBtn,
    answerInput
} from '../ui/elements.js';
import { generateQuestion } from './questionGenerator.js';

let currentMode = 'relaxed'; // Default mode

export function switchMode(newMode) {
    // Remove active class from all mode buttons
    relaxedModeBtn.classList.remove('active');
    blitzModeBtn.classList.remove('active');

    // Add active class to selected mode button
    if (newMode === 'relaxed') {
        relaxedModeBtn.classList.add('active');
        handleRelaxedMode();
    } else if (newMode === 'blitz') {
        blitzModeBtn.classList.add('active');
        handleBlitzMode();
    }

    // Update current mode
    currentMode = newMode;

    // Reset game state for new mode
    answerInput.value = '';
    generateQuestion();
}

function handleBlitzMode() {
    document.body.setAttribute('data-mode', 'blitz');
    // Additional blitz mode setup
}

function handleRelaxedMode() {
    document.body.removeAttribute('data-mode');
    // Additional relaxed mode setup
}

export function getCurrentMode() {
    return currentMode;
}

export function isBlitzMode() {
    return currentMode === 'blitz';
}

export function isRelaxedMode() {
    return currentMode === 'relaxed';
}