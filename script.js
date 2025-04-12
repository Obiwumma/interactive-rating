const ratingOne = document.getElementById("#1")
const ratingTwo = document.getElementById("#2")
const ratingThree = document.getElementById("#3")
const ratingFour = document.getElementById("#4")
const ratingFive = document.getElementById("#5")

const mainPage = document.getElementById("main")
const successPage = document.getElementById("success")

const submitBtn = document.getElementById("#submit")

submitBtn.addEventListener("click", () => {
  mainPage.classList.add("hidden")
  successPage.classList.remove("hidden")
  successPage.classList.add("active")
})