var openness= 0;
var introversion= 0;
var conscientiousness= 0;
var agreeableness= 0;
var extroversion= 0;
var neuroticism= 0;



$(document).ready(function() {
 $("form#options").submit(function(event) {
   event.preventDefault();

   if (!$('[name=Q0]').is(':checked')|| !$('[name=Q1]').is(':checked')|| !$('[name=Q2]').is(':checked') ||!$('[name=Q3]').is(':checked') || !$('[name=Q4]').is(':checked')|| !$('[name=Q5]').is(':checked') || !$('[name=Q6]').is(':checked') || !$('[name=Q7]').is(':checked') || !$('[name=Q8]').is(':checked') || !$('[name=Q9]').is(':checked')){
     alert("please answer all the questions")
   }else

   {
       var buttonOne = $("input:radio[name='Q0']:checked").val();
       var buttonTwo= $("input:radio[name='Q1']:checked").val();
       var buttonThree = $("input:radio[name='Q2']:checked").val();
       var buttonFour= $("input:radio[name='Q3']:checked").val();
       var buttonFive = $("input:radio[name='Q4']:checked").val();
       var buttonSix = $("input:radio[name='Q5']:checked").val();
       var buttonSeven = $("input:radio[name='Q6']:checked").val();
       var buttonEight= $("input:radio[name='Q7']:checked").val();
       var buttonNine = $("input:radio[name='Q8']:checked").val();
       var buttonTen = $("input:radio[name='Q9']:checked").val();

       var answers= [buttonOne,buttonTwo,buttonThree,buttonFour,buttonFive,buttonSix, buttonSeven, buttonEight, buttonNine, buttonTen];



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

    

      console.log(scores);
      console.log(highest);
      
      
      if(scores.indexOf(highest) == 0){
        $("#result1").show();
      }
      else if(scores.indexOf(highest) == 1){
        $("#result2").show();
      }
      else if(scores.indexOf(highest) == 2){
        $("#result3").show();
      }
      else if(scores.indexOf(highest) == 3){
        $("#result4").show();
      }
      else if(scores.indexOf(highest) == 4){
        $("#result5").show();
      }
      else{
          
        $("#options").hide();
        $("#result6").show();
      }
      
    }//end of endResult function
    getResult();

    }); 
    
  });



   
 