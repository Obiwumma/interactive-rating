const ratingOne = document.getElementById("1")
const ratingTwo = document.getElementById("2")
const ratingThree = document.getElementById("3")
const ratingFour = document.getElementById("4")
const ratingFive = document.getElementById("5")

const mainPage = document.getElementById("main")
const successPage = document.getElementById("success")

const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", () => {
  mainPage.classList.add("hidden")
  successPage.classList.remove("hidden")
  successPage.classList.add("active")
})

const rateBtn = [ratingOne, ratingTwo, ratingThree,ratingFour, ratingFive]

rateBtn.forEach(element => {
  element.addEventListener("click", () => {
    
    if (element == ratingOne) {
      console.log("one")
    } else if (element == ratingTwo) {
      console.log("two")
    } else if (element == ratingThree) {
      console.log("three")
    } else if (element == ratingFour) {
      console.log("four")
    } else {
      console.log("five")
    }
  })
});