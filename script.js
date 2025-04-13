const ratingOne = document.getElementById("1")
const ratingTwo = document.getElementById("2")
const ratingThree = document.getElementById("3")
const ratingFour = document.getElementById("4")
const ratingFive = document.getElementById("5")

const selectMsg = document.getElementById("selected")

const mainPage = document.getElementById("main")
const successPage = document.getElementById("success")

const submitBtn = document.getElementById("submit")


const rateBtn = [ratingOne, ratingTwo, ratingThree,ratingFour, ratingFive]

rateBtn.forEach(element => {
  element.addEventListener("click", () => {
    submitBtn.addEventListener("click", () => {
      mainPage.classList.add("hidden")
      successPage.classList.remove("hidden")
      successPage.classList.add("active")
    });
    if (element == ratingOne) {
      let rateNum = 1
      selectMsg.innerText = `You selected ${rateNum} out of 5`
      console.log(selectMsg.innerText);
    } else if (element == ratingTwo) {
      let rateNum = 2
      selectMsg.innerText = `You selected ${rateNum} out of 5`
      console.log(selectMsg.innerText);
    } else if (element == ratingThree) {
      let rateNum = 3
      selectMsg.innerText = `You selected ${rateNum} out of 5`
      console.log(selectMsg.innerText);
    } else if (element == ratingFour) {
      let rateNum = 4
      selectMsg.innerText = `You selected ${rateNum} out of 5`
      console.log(selectMsg.innerText);
    } else {
      let rateNum = 5
      selectMsg.innerText = `You selected ${rateNum} out of 5`
      console.log(selectMsg.innerText);
    }
  })
});

