document.addEventListener("DOMContentLoaded", function () {
  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple tab navigation
  const navLinks = document.querySelectorAll(".nav-link");
  const panels = document.querySelectorAll(".panel");

  navLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;

      // Update active nav
      navLinks.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show selected panel
      panels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });

  // Quiz logic
  const quizSubmit = document.getElementById("quiz-submit");
  const quizResult = document.getElementById("quiz-result");

  if (quizSubmit && quizResult) {
    quizSubmit.addEventListener("click", () => {
      const questions = document.querySelectorAll(".quiz-question");
      let correctCount = 0;
      let total = questions.length;

      questions.forEach((q, index) => {
        const correct = q.getAttribute("data-correct");
        const name = "q" + (index + 1);
        const selected = q.querySelector(`input[name="${name}"]:checked`);

        q.classList.remove("correct", "incorrect");

        if (selected && selected.value === correct) {
          correctCount++;
          q.style.borderColor = "#4ade80"; // light green
        } else {
          q.style.borderColor = "#f97373"; // light red
        }
      });

      quizResult.textContent = `You got ${correctCount} out of ${total} correct.`;
      if (correctCount === total) {
        quizResult.textContent += " Nice work – you’re ready to sell!";
      } else if (correctCount === 0) {
        quizResult.textContent += " Have another look at the earlier sections and try again.";
      }
    });
  }
});
