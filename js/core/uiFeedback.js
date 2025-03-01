const resultEl = document.createElement("div");
resultEl.id = "floating-result";
const flexWrapper = document.querySelector('.flyer-flex-wrapper');
if (flexWrapper) {
    flexWrapper.appendChild(resultEl);
} else {
    console.error('Flex wrapper element not found. Appending to body instead.'); // Fallback to body if flex-wrapper is not found
    document.body.appendChild(resultEl); 
    resultEl.style.position = "fixed";
    resultEl.style.width = "200px";
    resultEl.style.left = "calc(50% - 100px)";
    resultEl.style.bottom = "50vh";
}

export function showFloatingResult(text, isCorrect) {
    resultEl.textContent = text;
    resultEl.className = isCorrect ? "correct-flyer" : "incorrect-flyer";
    resultEl.style.display = "block ";
    setTimeout(() => {
        resultEl.style.opacity = "1";
        resultEl.style.transform = "translateY(0)";
    }, 10);
    setTimeout(() => {
        resultEl.style.opacity = "0";
        resultEl.style.transform = "translateY(-20px)";
    }, 1500);
}