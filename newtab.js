document.addEventListener("DOMContentLoaded", () => {
    const questionEl = document.getElementById("math-question");
    const answerInput = document.getElementById("answer");
    const submitBtn = document.getElementById("submit");
    const resultEl = document.createElement("div");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsMenu = document.getElementById("settings-menu");
    const operatorCheckboxes = document.querySelectorAll("input[name='operator']");
    const difficultySelect = document.getElementById("difficulty");
    const nav = document.querySelector("nav");

    resultEl.id = "floating-result";
    document.body.appendChild(resultEl);

    let selectedOperators = ["+", "-", "×", "÷"];
    let difficulty = "easy";

    function generateQuestion() {
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

    function showFloatingResult(text, isCorrect) {
        resultEl.textContent = text;
        resultEl.className = isCorrect ? "correct-flyer" : "incorrect-flyer";
        resultEl.style.display = "block";
        setTimeout(() => {
            resultEl.style.opacity = "1";
            resultEl.style.transform = "translateY(0)";
        }, 10);
        setTimeout(() => {
            resultEl.style.opacity = "0";
            resultEl.style.transform = "translateY(-20px)";
        }, 1500);
    }

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

    settingsBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("visible");
    });

    document.addEventListener("click", (event) => {
        if (!settingsMenu.contains(event.target) && event.target !== settingsBtn) {
            settingsMenu.classList.remove("visible");
        }
    });

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

    generateQuestion();
});
