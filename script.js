let numbers = ["one", "two", "three", "four", "five"]
let sectionRating = document.querySelector(".rating")
let sectionThanks = document.querySelector(".thanks")
let submit = document.getElementById("submit")
let result = document.querySelector(".result")
let selectedElement = null
let dataValue = null


for (const num of numbers) {
  let numElement = document.getElementById(`${num}`)

  numElement.addEventListener("click", () => {
    if (selectedElement !== null) {
      selectedElement.style.background = "#262F38";
      selectedElement.style.color = "#7D8591";
    }
    if (selectedElement !== numElement) {
      numElement.style.background = "#7C8898";
      numElement.style.color = "#fff";
      selectedElement = numElement;
      dataValue = numElement.getAttribute("data-value")
    } else {
      selectedElement = null
      dataValue = null
    }
  })
}

submit.addEventListener("click", () => {
  if (dataValue !== null) {
    sectionRating.style.display = "none"
    sectionThanks.style.display = "flex"
    result.append(`You selected ${dataValue} out of 5`)
    //console.log(dataValue);
  }
})
