


  // js for questions (needs work on it)
const questions = [
    {
        question: "Which statement about Berlin is wrong ?",
        optionA: "It is the capital of the Federal Republic of Germany",
        optionB: "It is one of Germany's 16 federal states",
        optionC: "East Berlin used to be the capital of the GDR",
        optionD: "There is no 'Currywurst' in the city",
        correctOption: "optionD"
    },
    {
        question: "He was a good tennis player. He won two Wimbledon titles ?",
        optionA: "Roger Federer",
        optionB: "Bojn Berg",
        optionC: "Boris Becker",
        optionD: "Rafael Nadal",
        correctOption: "optionC"
    },
    {
        question: "What was the wall called that separated the country ?",
        optionA: "The Munich Wall",
        optionB: "The Bonn Wall",
        optionC: "The Bremen Wall",
        optionD: "The Berlin Wall",
        correctOption: "optionD"
    },
    {
        question: "What was West Germany's capital ?",
        optionA: "Munich",
        optionB: "Bonn",
        optionC: "Bremen",
        optionD: "Hamburg",
        correctOption: "optionB"
    },
    {
        question: "What was East Germany's capital ?",
        optionA: "Berlin",
        optionB: "Wuppertal",
        optionC: "Hamburg",
        optionD: "POtsdam",
        correctOption: "optionA"
    },
    {
        question: "How tall is the Berliner Fernsehturm (TV-tower) ?",
        optionA: "298 meters",
        optionB: "368 meters",
        optionC: "423 meters",
        optionD: "365 meters",
        correctOption: "optionB"
    },
  {
      question: "When did Berlin originally become a prominent city ?",
      optionA: "In the 13th century",
      optionB: "In the 11th century",
      optionC: "In the 14th century",
      optionD: "In the 12th century",
      correctOption: "optionC"
  },

  {
      question: "How was Berlin divided during WWII ?",
      optionA: "Into three occupied zones",
      optionB: "Into five occupied zones",
      optionC: "Into four occupied zones",
      optionD: "Into two occupied zones",
      correctOption: "optionA"
  },

  {
      question: "When was the Berlin Wall erected ?",
      optionA: "In 1961",
      optionC: "In 1949",
      optionB: "In 1965",
      optionD: "In 1963",
      correctOption: "optionA"
  },

  {
      question: "What did the fall of the Berlin Wall mark the end of ?",
      optionA: "The Cold War",
      optionB: "The First World War",
      optionC: "The Second World Wa",
      optionD: "The Nuclear War",
      correctOption: "optionA"
  },

  {
      question: "What is Berlin known for today ?",
      optionA: "Its politics",
      optionB: "Its culture and commerce",
      optionC: "Its nightlife",
      optionD: "Its history and arts",
      correctOption: "optionB"
  },

  {
      question: "What is a famous landmark in Berli ?",
      optionA: "The Great Wall of China",
      optionB: "The Berlin Wall",
      optionC: "Victoria Park",
      optionD: "The Disnay Palace",
      correctOption: "optionC"
  },

  {
      question: "Berlin is home to over 180 of _____ ?",
      optionA: "Art galleries",
      optionB: "Movie theaters",
      optionC: "Museums",
      optionD: "Libraries",
      correctOption: "optionC"
  },

  {
      question: "How many species of animals does the Berlin Zoo have ?",
      optionA: "1,000",
      optionB: "1,200",
      optionC: "1,500",
      optionD: "1,800",
      correctOption: "optionD"
  },

  {
      question: "How many bars and clubs does Berlin have ?",
      optionA: "1500",
      optionB: "2000",
      optionC: "2500",
      optionD: "3000",
      correctOption: "optionB"
  },

  {
      question: `"What was Berlin a center of in the 1980s`,
      optionA: "The rock music scene",
      optionB: "The punk music scene",
      optionC: "The techno music scene",
      optionD: "The jazz music scene",
      correctOption: "optionC"
  },

  {
      question: "What is a popular destination for exploring Berlin's history ?",
      optionA: "Alexander Platz",
      optionB: "Berlin Zoo",
      optionC: "Berlin Wall",
      optionD: "Donner Kebab place",
      correctOption: "optionC"
  },

  {
      question: "What is Berlin known for its vibrant nightlife scene ?",
      optionA: "Bars",
      optionB: "Clubs",
      optionC: "Resraurants",
      optionD: "Both clubs and bars",
      correctOption: "optionD"
  },


  {
      question: "What type of shopping options does Berlin have ?",
      optionA: "Large department stores only",
      optionB: "Unique boutiques only",
      optionC: "A variety of options",
      optionD: "Small shops only",
      correctOption: "optionC"
  },

  {
      question: "What is a famous indoor market in Berlin ?",
      optionA: "Market Place Berlin",
      optionB: "Shibuya",
      optionC: "Markthalle Neun",
      optionD: "Privoz",
      correctOption: "optionC"
  },

  {
      question: "What is a famous street food spot in Berlin ?",
      optionA: "Currywurst Berlin",
      optionB: "Sturbucks",
      optionC: "EDEKA",
      optionD: "Curry Berlin",
      correctOption: "optionA"
  },

  

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })
 
  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second
  setTimeout(() => {
      if (indexNumber <= 9) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}

// end js for quistions (needs work on it)