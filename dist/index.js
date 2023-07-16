const { content } = require("html2canvas/dist/types/css/property-descriptors/content")

function showParagraph(paragraphName) {
  const myClickedParagraph = document.getElementById(paragraphName)
  const allMyParagraphs = document.getElementsByClassName('myParagraphs')

  const newContent = document.getElementById("newContent")
  const newContent1 = document.getElementById("newContent1")
  const newContent2 = document.getElementById("newContent2")
  const newContent3 = document.getElementById("newContent3")
  const content = document.getElementById("content")
  content.setAttribute("style", "display:block")
  newContent.setAttribute("style", "display:none")
  newContent1.setAttribute("style", "display:none")
  newContent2.setAttribute("style", "display:none")
  newContent3.setAttribute("style", "display:none")


  const allElementsArr = [...allMyParagraphs]
  allElementsArr.map((e) => e.style.display = 'none')

  myClickedParagraph.style.display = 'inline'
}


function showProject() {
  const content = document.getElementById("content")
  content.setAttribute("style", "display:none")

  const newContent = document.getElementById("newContent")
  newContent.setAttribute("style", "display:block")

  console.log(content)
}

function showProject1() {
  const content = document.getElementById("content")
  content.setAttribute("style", "display:none")

  const newContent1 = document.getElementById("newContent1")
  newContent1.setAttribute("style", "display:block")

  console.log(content)
}

function showProject2() {
  const content = document.getElementById("content")
  content.setAttribute("style", "display:none")

  const newContent2 = document.getElementById("newContent2")
  newContent2.setAttribute("style", "display:block")

  console.log(content)
}

function showProject3() {
  const content = document.getElementById("content")
  content.setAttribute("style", "display:none")

  const newContent3 = document.getElementById("newContent3")
  newContent3.setAttribute("style", "display:block")

  console.log(content)
}

function hideProject() {
  const content = document.getElementById("content")
  content.setAttribute("style", "display:block")

  const hideContent = document.getElementById("newContent")
  hideContent.setAttribute("style", "display:none")

  console.log(content)
}

function myLogo() {
  location.reload();
}

function downloadStarman() {
  const a = document.createElement("a");
  a.href = './dark2.apk';
  a.download = 'dark2.apk';

  // Append the anchor element to the body
  document.body.appendChild(a);

  // Trigger a click event on the anchor element
  a.click();

  // Remove the anchor element from the body
  document.body.removeChild(a);
}
