// $(document).ready(function(){
//   $('input').each(function(){
//     $(this).click(function(){
//       console.log($(this).val());
//     });
//   });
// })

function showSelected() {

  var questionOneAnswer = $("input[name=questionOne]:checked").val();
  var questionTwoAnswer = $("input[name=questionTwo]:checked").val();
  var questionThreeAnswer = $("input[name=questionThree]:checked").val();
  if(questionOneAnswer==null || questionTwoAnswer==null || questionThreeAnswer==null) {
    console.log('You did not answer all the questions');
    $('.error').fadeIn();
  }else{
    $('.error').fadeOut();
    $('form').fadeOut();
    //process the user answers
    // var form = $('.formQuiz');
    // var values = form.serialize();
    // console.log(questionOneAnswer);
    // console.log(questionTwoAnswer);
    // console.log(questionThreeAnswer);
    var score = 0;
    //check if the answers are correct
    if (questionOneAnswer == "a") {
      //Assign marks to correct answer
      score = score + 10;
    }
    //scoring for question 2
    if (questionTwoAnswer == "c") {
      //Assign marks to correct answer
      score = score + 15;
    }
    if (questionThreeAnswer == "d") {
      //Assign marks to correct answer
      score = score + 12;
    }
    console.log(score);
    var scoreHolder = document.getElementsByClassName('score')[0];
    scoreHolder.textContent = score;
    $('.results').fadeIn();
    //$('.score').text(score);
  }

}
