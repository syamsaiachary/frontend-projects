const question = document.querySelectorAll(".questions");

question.forEach((questions) => {
  questions.addEventListener("click", () => {
    questions.classList.toggle("open")
  });
}
)