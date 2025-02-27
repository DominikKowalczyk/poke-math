document.addEventListener("DOMContentLoaded", () => {
    const questionEl = document.getElementById("math-question");
    const answerInput = document.getElementById("answer");
    const submitBtn = document.getElementById("submit");
    const resultEl = document.createElement("div");

    resultEl.id = "floating-result";
    document.body.appendChild(resultEl);

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operators = ["+", "-", "×", "÷"];
        const operator = operators[Math.floor(Math.random() * operators.length)];

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
        answerInput.classList.remove("correct-border", "incorrect-border"); // Reset borders
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
            return;
        }

        const correctAnswer = parseFloat(questionEl.dataset.answer);
        if (parseFloat(userAnswer) === correctAnswer) {
            showFloatingResult("✅ Correct! 🎉", true);
            answerInput.classList.add("correct-border"); // Add correct border
            setTimeout(() => {
                answerInput.classList.remove("correct-border"); // Remove correct border
                generateQuestion();
            }, 1000);
        } else {
            showFloatingResult(`❌ Incorrect! The answer was ${correctAnswer}`, false);
            answerInput.classList.add("incorrect-border"); // Add incorrect border
            answerInput.value = ""; // Clear input
            setTimeout(() => {
                answerInput.classList.remove("incorrect-border"); // Remove incorrect border
            }, 1500);
        }
    });

    answerInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            submitBtn.click();
        }
    });

    generateQuestion();
    setTimeout(() => {
        answerInput.focus();
    }, 500);
});