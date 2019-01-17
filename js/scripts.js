
var openness= 0;
var introversion= 0;
var conscientiousness= 0;
var agreeableness= 0;
var extroversion= 0;
var neuroticism= 0;


    
$(document).ready(function() {
  $("form#options").submit(function(event) {    
    event.preventDefault(); 
        
    if (!$('[name=Q0]').is(':checked')|| !$('[name=Q1]').is(':checked')|| !$('[name=Q2]').is(':checked') ||!$('[name=Q3]').is(':checked') || !$('[name=Q4]').is(':checked')|| !$('[name=Q5]')){
      alert("please answer all the questions") 
    }else

    {
        var buttonOne = $("input:radio[name='Q0']:checked").val();
        var buttonTwo= $("input:radio[name='Q1']:checked").val();
        var buttonThree = $("input:radio[name='Q2']:checked").val();
        var buttonFour= $("input:radio[name='Q3']:checked").val();
        var buttonFive = $("input:radio[name='Q4']:checked").val();
        var buttonSix= $("input:radio[name='Q5']:checked").val();

        var answers= [buttonOne,buttonTwo,buttonThree,buttonFour,buttonFive,buttonSix];
       
        
       
          answers.forEach(function(answer){
            if(answer=="O"){

            openness+= 25;
            }
           else if (answer=="N"){
            neuroticism+=25; 
           }
           else if (answer=="A"){
            agreeableness+=25; 
           }
           else if (answer=="C"){
            conscientiousness+=25; 
           }
           else if (answer=="E"){
            extroversion+=25; 
           }
           else if (answer=="I"){
            neuroticism+=25; 
           }
           
          
          })
          alert(answers);


    } 
     var getResult= function() {
      var scores=[openness,neuroticism,conscientiousness,agreeableness,extroversion,introversion];
       var highest = Math.max.apply(Math, scores);   
       if (openness == highest){
         

       }
       console.log(scores);
       console.log(highest);

       console.log(scores.indexOf(highest))
      }
    
      getResult()

      

     

     



    });
  });
    

  

//   getResult(function(){
    
//   // answers;
//   var highest =Math.max.apply(Math, answers)
//   if (O==highest){
//     alert("you are open")
//   }
//   else if (N==highest){
//     alert("you are Neurotic")
//   }
//   else if (A==highest){
//     alert("you are Agreeable")
//   }
//   else if (C==highest){
//     alert("you are Concentious")
//   }
//   else  if (I==highest){
//     alert("you are Introvert")
//   }
//   else {
//     alert("you are Extrovert")
//   }
//   alert(highest);
// });


// });  
















 
//   if (answer== "O" ) {
//     openness+= 25;
//   } else if 
//     (answer== "N" ){
//       neuroticism+=25
//   }
//   else if 
//     (answer== "A" ){
//       agreeableness+=25
//   }
//   else if 
//     (answer== "C" ){
//       conscientiousness+=25
//   }
//   else if 
//   (answer== "E" ){
//     extroversion+=25
// }
// else if 
// (answer== "I" ){
//   introversion+=25
 



    




















//  Business logic
// $(document).ready(function() {
//  function noAnswer(){
        
//     if (!$('[name=Q1]').is(':checked') || !$('[name=Q2]').is(':checked') || !$('[name=Q3]').is(':checked') || !$('[name=Q4]').is(':checked') || !$('[name=Q5]').is(':checked') || !$('[name=Q6]').is(':checked')){

//         return true;

//     } 
//     else {
//       alert("go ahead")
//     }      

// };
// });
// var openness=0;
// var introversion=0;
// var conscientiousness=0;
// var agreeableness=0;
// var extroversion=0;
// var neuroticism=0;
    

// function answersChecked(questions, answers){

//     if (questions === answers){
//         return true;
//     }

// }

// User interface logic
// $(document).ready(function() {

// $("form#options").submit(function(event) {

// var buttonOne = $("input:radio[name='Q1']:checked").val();
// var buttonTwo= $("input:radio[name='Q2']:checked").val();
// var buttonThree = $("input:radio[name='Q3']:checked").val();
// var buttonFour= $("input:radio[name='Q4']:checked").val();
// var buttonFive = $("input:radio[name='Q5]:checked").val();
// var buttonSix= $("input:radio[name='Q6']:checked").val();

//
// });
// });

// if(noAnswer())
// {
//     alert("please answer all questions!");
// }
// event.preventDefault();
// });
// });

// else{

    
//     if (answersChecked(Q1, "nganira n'inshuti zanjye gusa")) {
//         introversion += 10;
//     }

//     else if (answersChecked(Q1, "nganira n'abantu tumenyeranye")) {
//         extroversion += 10;
//     }

//     else if (answersChecked(Q1, "nganira n'abantu bose")) {
//         open += 10;
//     }
//     else {
//          agreeableness += 10;
//     }

  
// //     $("#quiz").hide();
// //     $("#marks").text("Your score is: "+ total+ "/90");
// //     $("#results").show();
//  alert("you have selected" +answersChecked);
//  }
//   event.preventDefault();
// });

// });



// function myFunction() {
//     if (document.getElementById('a').checked) {
//       document.getElementById("fight").style.display= 'block';
//       document.getElementById("comeback").style.display= 'none';
//       document.getElementById("run").style.display= 'none';
  
//     }else if (document.getElementById('b').checked) {
//       document.getElementById("comeback").style.display= 'block';
//       document.getElementById("fight").style.display= 'none';
//       document.getElementById("run").style.display= 'none';
//     }else if (document.getElementById('c').checked) {
//       document.getElementById("run").style.display= 'block';
//       document.getElementById("fight").style.display= 'none';
//       document.getElementById("comeback").style.display= 'none';
//     }
  
  