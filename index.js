const STORE = {
  score: 0,
  questionNumber: 0,
  imageNumber: 0,
  questions: [
    {
      question: "What sort of Metal was injected into Wolverine's bones during his time in the weapon X program?",
      answers: [
        "Iron",
        "Unobtanium",
        "Adamantium",
        "Titanium"
      ],
      number: 1,
      correctAnswer: 2,
      imgQuestion: "https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/fgy3yvnp3aaitufenhb6/does-old-man-logan-death-of-wolverine-wolverine-3-weapon-x.jpg",
      imgAnswer: "http://static.comicvine.com/uploads/original/3/31599/1252495-06.jpg"
    },
    {
      question: "Who designed Professor Xavier’s hover-chair?",
      answers: [
        "Deadpool",
        "Forge",
        "Cyclops",
        "Beast"
      ],
      number: 2,
      correctAnswer: 1,
      imgQuestion: "https://static.comicvine.com/uploads/original/11114/111144184/4663728-9234697405-profe.jpg",
      imgAnswer: "https://i.pinimg.com/originals/8f/90/75/8f9075ed7c6d593a84fdb09538683941.jpg"
    },
    {
      question: "Who travelled to the past and accidentally killed Professor Xavier, causing a rift in the space/time continuum - leading to the Age of Apocalypse?",
      answers: [
        "Bishop",
        "Legion",
        "Lilandra",
        "Apocalypse",
      ],
      number: 3,
      correctAnswer: 1,
       imgQuestion: "http://media.comicbook.com/uploads1/2014/11/legion-quest-death-of-professor-x-113396.png",
      imgAnswer: "http://geekandsundry.com/wp-content/uploads/2017/02/legion-2.png"
    },
    {
      question: "What is the name of Nathan Summers AKA Cable’s childhood affliction which forced his parents, Cyclops and Jean Grey to send him to the distant future where he could be cured?",
      answers: [
        "HIV",
        "Typhoid",
        "Legacy Virus",
        "Cerebral Palsy"
        ],
       number: 4,
       correctAnswer: 2,
       imgQuestion: "https://static.comicvine.com/uploads/square_medium/11111/111111230/3264334-204270-31903-cable-super.jpg",
       imgAnswer: "https://i.pinimg.com/736x/b3/26/b1/b326b165822976ac2b76c38ab7b19a0c--hope-summers-x-men.jpg"
    },
    {
      question: "Who was not an original member of the X-Men?",
      answers: [
        "Cyclops",
        "Rogue",
        "Iceman",
        "Jean Grey"
      ],
      number: 5,
      correctAnswer: 1,
       imgQuestion:"https://cdn2.newsok.biz/cache/r960-b3ad750f5207ad90e4d67ba6607c4cb7.jpg",
       imgAnswer:"https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/qjjjn32bnilfuv1gcxgj/x-men-dream-cast-five-up-and-coming-actresses-that-are-absolutley-perfect-to-play-rogue.jpg"
    },
    {
      question: "In what year was the first issue of X-Men published?",
      answers: [
        "1963",
        "1961",
        "1958",
        "1939"
      ],
      number: 6,
      correctAnswer: 0,
       imgQuestion:"http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/c0236db7-7535-41df-8587-c9b55b6bd3f8/83487df6-afbf-4aca-91f6-dae986a8cc10.jpg",
       imgAnswer: "http://www.hoodedutilitarian.com/wp-content/uploads/2014/05/X-Men-pin-up.jpg"
    },
    {
      question: "What is Wolverine’s original name?",
      answers: [
        "Logan",
        "Scott Summers",
        "James Howlett",
        "Henry McCoy"
      ],
      number: 7,
      correctAnswer: 2,
       imgQuestion: "https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg",
       imgAnswer: "http://vignette1.wikia.nocookie.net/marveldatabase/images/7/74/James_Howlett_%28Earth-TRN229%29_01.jpg/revision/latest?cb=20121223023217"
    },
    {
      question: "Who did Sabretooth viciously murder on Wolverine’s birthday?",
      answers: [
        "Ms. Marvel",
        "Jean Grey",
        "Psylocke",
        "Silver Fox"
      ],
      number: 8,
      correctAnswer: 3,
        imgQuestion: "https://i.pinimg.com/736x/f4/b1/44/f4b144c7e8ba20d91771d03a58da25d7--jim-lee-jim-orourke.jpg",
        imgAnswer: "http://www.wolverinefiles.com/wp-content/uploads/2011/03/silver-fox-logan.jpg"
    },
    {
      question: "What is Gambit’s real name?",
      answers: [
        "James Howlett",
        "Remy Lebeau",
        "Scott Summers",
        "Tony Stark"
      ],
      number: 9,
      correctAnswer: 1,
       imgQuestion: "https://assets.wired.com/photos/w_1440/wp-content/uploads/2015/11/Gambit1.jpg",
       imgAnswer: "http://omegaunderground.com/wp-content/uploads/2016/03/GAMBIT-DELAYED_LEA-SEYDOUX_EXITING_ROGUE.jpg"
    },
    {
      question: "Who directed the disastrous movie X-Men 3: The Last Stand?",
      answers: [
        "Bryan Singer",
        "Matthew Vaughn",
        "Brett Ratner",
        "James Mangold"
      ],
      number: 10,
      correctAnswer: 2,
      imgQuestion: "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/x-pic_1.jpg?itok=9iJFkjqH",
      imgAnswer: "https://pmcvariety.files.wordpress.com/2017/11/brett-ratner-sexual-harassment-3.jpg?w=700&h=393&crop=1"
    },
  ]
};





function renderQuestionImage(){
  $(".quiz img.question").attr("src", STORE.questions[STORE.questionNumber].imgQuestion);
  $(".quiz .container.question").removeClass("hidden");
  $(".quiz .container.answer").addClass("hidden");
  $(".js-feedback").addClass("hidden");
}

function renderAnswerImage() {
  $(".quiz img.answer").attr("src", STORE.questions[STORE.questionNumber].imgAnswer);
  $(".quiz .container.question").addClass("hidden")
  $(".quiz .container.answer").removeClass("hidden");
  $(".js-feedback").removeClass("hidden");

}

function renderQuestion(){
  const currentQuestion = STORE.questions[STORE.questionNumber];
  $(".number").text(`Question ${STORE.questions[STORE.questionNumber].number} of 10`);
  $(".quiz h2").text(currentQuestion.question);
  $("input:checked").prop('checked', false);
  $(".js-feedback").text("");
  $(".answer-choices").removeClass("hidden");
  $(".score-forNow").removeClass("hidden");
    $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.return}`)
    );
  for (let i= 0;i < currentQuestion.answers.length; i ++){
    $(`.answer${ i + 1 }`).text(currentQuestion.answers[ i ] );
  }
  renderQuestionImage();
}
function renderResults(){
  $(".quiz").addClass("hidden");
  $(".results").removeClass("hidden");
  $(".score").text(STORE.score);
  $(".question-total").text(STORE.questions.length);
}

function handleRestart(event){
  $('.results').addClass("hidden");
  STORE.score= 0;
  STORE.questionNumber= 0;
  handleStart(event);
  $(".score-forNow").addClass("hidden");
}

function handleStart( event ){
  event.preventDefault();
  $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.return}`)
  );
  $(".start-page").addClass("hidden");
  $(".quiz").removeClass("hidden");
  renderQuestion();
  renderQuestionImage();

}

function handleNext(event){
    event.preventDefault();
    $(".js-next").addClass("hidden");
    $(".js-submit").addClass("hidden");
    $(".score-forNow").addClass("hidden");
    if (STORE.questionNumber + 1 < STORE.questions.length) {
      STORE.questionNumber++ ;
}
    else {
      renderResults();
}
    renderQuestion();
    $('input').keydown(event =>
      $('.output').text(`Key pressed: ${event.return}`)
    );
}
function handleAnswer(event){
    $(".js-submit").removeClass("hidden");
}


function handleSubmit(event){
    event.preventDefault();
    $('input').keydown(event =>
      $('.output').text(`Key pressed: ${event.return}`)
    );
    const selectedAnswer = parseInt($ ('input:checked').val(), 10);
    console.log(STORE.questions[STORE.questionNumber].answers[STORE.questions[STORE.questionNumber].correctAnswer]);
    renderAnswerImage();
    if ( selectedAnswer === STORE.questions[STORE.questionNumber].correctAnswer){
      STORE.score++;
      $(".js-feedback").html(`CORRECT<br>The answer is ${STORE.questions[STORE.questionNumber].answers[STORE.questions[STORE.questionNumber].correctAnswer]}`)
    }
    else {
      $(".js-feedback").text(`INCORRECT! The answer is ${STORE.questions[STORE.questionNumber].answers[STORE.questions[STORE.questionNumber].correctAnswer]}`);
    }
    $(".js-submit").addClass("hidden");
    $(".js-next").removeClass("hidden");
    $("input:checked").prop('checked', false);
    $(".answer-choices").addClass("hidden");
    $(".score-forNow").removeClass("hidden");
    $(".score-forNow").text(`YOUR SCORE: ${STORE.score}`);


}

function initializeQuiz() {
  $(".start-quiz").click(handleStart);
  $(".js-next").click(handleNext);
  $("#quiz").submit(handleSubmit);
  $("input").click(handleAnswer);
  $(".results button").click(handleRestart);


}

$(initializeQuiz);
