const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

function showFaq() {
  
}

function createFaq() {

  faqData.forEach(e => {

    // create FAQ div
    const faqDiv = document.createElement("div");
    faqDiv.setAttribute("class", "faq")

    // creating FAQ_header
    const faqHeaderDiv = document.createElement("div");
    faqHeaderDiv.setAttribute("class", "faq_header")

    // creating FAQ content (p)
    const faqContent = document.createElement("p")
    faqContent.setAttribute("class", "hidden")

    // appending faq div inside accordianBody
    accordianBody.append(faqDiv)

    // appending header & content inside faq div
    faqDiv.append(faqHeaderDiv)
    faqDiv.append(faqContent)

    // creating element for faq_header
    const headingH3 = document.createElement("h3")
    const plusImg = document.createElement("img")

    // appending  header & img inside faq_header
    faqHeaderDiv.append(headingH3);
    faqHeaderDiv.append(plusImg);

    // injecting text & attributes inside elements
    const h3Text = document.createTextNode(e.question)
    headingH3.append(h3Text)

    plusImg.setAttribute("width", "28px")
    plusImg.setAttribute("src", "https://img.icons8.com/ios-glyphs/344/plus--v1.png")
    
    const contentText = document.createTextNode(e.answer);
    faqContent.append(contentText)


  })

  
}
createFaq()



const header = document.querySelectorAll(".faq_header");
const para = document.querySelectorAll("p");
console.log(header, para);


for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", () => {
      for (let j = 0; j < para.length; j++) {
          if (i == j) {
              para[j].classList.toggle("hidden")
          } 
      }
  });
}



// header.forEach(e => {
//   e.addEventListener("click", ()=>{

//     para.forEach(f => {
//       f.classList.toggle("hidden")
//     })
    
//   })
// })

function btnStatusUpdate() {
  
}
console.log(accordianBody);



