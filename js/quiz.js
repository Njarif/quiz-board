function showSelected() {
  var questionOneAnswer = $("input[name=questionOne]:checked").val();
  var questionTwoAnswer = $("input[name=questionTwo]:checked").val();
  var questionThreeAnswer = $("input[name=questionThree]:checked").val();
  var questionFourAnswer = $("input[name=questionFour]:checked").val();
  var questionFiveAnswer = $("input[name=questionFive]:checked").val();
  var questionSixAnswer = $("input[name=questionSix]:checked").val();
  var questionSevenAnswer = $("input[name=questionSeven]:checked").val();
  var questionEightAnswer = $("input[name=questionEight]:checked").val();
  if (questionOneAnswer == null || questionTwoAnswer == null || questionThreeAnswer == null || questionFourAnswer == null || questionFiveAnswer == null || questionSixAnswer == null || questionSevenAnswer == null || questionEightAnswer == null ) {
    console.log('You did not answer all the questions');
    $('.error').fadeIn();
  } else {
    $('.error').fadeOut();
    $('form').fadeOut();
    var score = 0;
    //check if the answers are correct
    if (questionOneAnswer == "a") {
      //Assign marks to correct answer
      score = score + 15;
    }
    //scoring for question 2
    if (questionTwoAnswer == "c") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionThreeAnswer == "d") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionFourAnswer == "c") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionFiveAnswer == "c") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionSixAnswer == "d") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionSevenAnswer == "c") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionEightAnswer == "a") {
      //Assign marks to correct answer
      score = score + 15;
    }

    console.log(score);
    var scoreHolder = document.getElementsByClassName('score')[0];
    scoreHolder.textContent = score;
    $('.results').fadeIn();
  }

}
