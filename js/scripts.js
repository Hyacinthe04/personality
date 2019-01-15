
 // Business logic

 function noAnswer(){
        
    if (!$('[name=qtn1]').is(':checked') || !$('[name=qtn2]').is(':checked')){

        return true;

    }       

}
var openness=0;
var introversion=0;
var conscientiousness=0;
var agreeableness=0;
var extroversion=0;
var neuroticism=0;


function answersChecked(questions, answers){

    if (questions === answers){
        return true;
    }

}

// User interface logic

$(document).ready(function() {


$("#button").submit(function(event) {

var Q1 = $("input:radio[name='qtn1']:checked").val();
var Q2 = $("input:radio[name='qtn2']:checked").val();

if(noAnswer())
{
    alert("please answer all questions!");
}

else{

    
    if (answersChecked(Q1, "nganira n'inshuti zanjye gusa")) {
        introversion += 10;
    }

    else if (answersChecked(Q1, "nganira n'abantu tumenyeranye")) {
        extroversion += 10;
    }

    else if (answersChecked(Q1, "nganira n'abantu bose")) {
        open += 10;
    }
    else {
         agreeableness += 10;
    }

  
//     $("#quiz").hide();
//     $("#marks").text("Your score is: "+ total+ "/90");
//     $("#results").show();
 alert("you have selected" +answersChecked);
 }
  event.preventDefault();
});

});