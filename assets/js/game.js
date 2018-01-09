(function() {
// Array Object Restructured
  const myQuestions = [
    {
      question: "What is Medela's Hospital Grade Pump called?",
      answers: {
        a: "Pumpin' Style",
        b: "Spectra",
        c: "Harmony",
        d: "Symphony"
      },
      correctAnswer: "d"
    },
    {
      question: "How many different sizes of Breast Shield are there?",
      answers: {
        a: "Two",
        b: "Three",
        c: "Nine",
        d: "Five"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the first type of milk produced during pregnancy called?",
      answers: {
        a: "Colostrum",
        b: "Whey",
        c: "Blooded",
        d: "Dry Milk"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Mastitis?",
    answers: {
      a: "Enlarged breasts",
      b: "A type of breast cancer",
      c: "Infection caused by 'plugged ducts'",
      d: "Low milk production"
    },
    correctAnswer: "c"
  },
  {
    question: "Many women with Mastitis feel like they have ______.",
  answers: {
    a: "Low Milk Supply",
    b: "The Flu",
    c: "Chicken Pox",
    d: "Yeast Infection"
  },
  correctAnswer: "b"
},
{
    question: "What hormone is necessary to induce lactation?",
  answers: {
    a: "Progesterone",
    b: "Prolactin",
    c: "Estrogen",
    d: "Lactation is not caused by hormones"
  },
  correctAnswer: "b"
},
{
    question: "Who created My 'Breast Friend'?",
  answers: {
    a: "Bill Clinton",
    b: "Andrew Zenoff",
    c: "Romina Ross",
    d: "Rosslyn Romanov"
  },
  correctAnswer: "b"
},
{
    question: "Where is the ONLY Milk Bank in California?",
  answers: {
    a: "San Francisco",
    b: "San Diego",
    c: "Los Angeles",
    d: "San Jose"
  },
  correctAnswer: "d"
},
{
    question: "Who is tasked with helping a family about breast feeding?",
  answers: {
    a: "Lactation Consultant",
    b: "General Nurse Practitioner with 1800 Hours of Lactation Education",
    c: "Obsterician",
    d: "Mastitician"
  },
  correctAnswer: "a"
},
{
    question: "What causes the condition known as 'sore nipples' in breast feeding?",
  answers: {
    a: "Babies Latched Incorrectly",
    b: "Teething",
    c: "Breast-Feeding Toddlers",
    d: "Engorged Breasts"
  },
  correctAnswer: "a"
}
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
