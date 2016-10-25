/**
 * Created by dodo on 7/10/16.
 */

var userName;
var userAnswerOne;
var userAnswerTwo;
var userAnswerThree;
var userAnswerFour;
var userAnswerFive;

var answerOne = 2;
var answerTwo = 2;
var answerThree = 2;
var answerFour = 2;
var answerFive = 1;

///modal
$(document).ready(function(){
    $('select').material_select();
    $(".button-collapse").sideNav();
    $('.modal-trigger').leanModal();

    $('.typist')
        .typist({
            text: 'play!'
        })
        .typistPause(1000)
        .typistRemove(5)
        .typistPause(500)
        .typistAdd('win!')
        .typistPause(1000)
        .typistRemove(4)
        .typistPause(500)
        .typistAdd('enjoy! :D')
        .typistStop();
});

function showNamePopup(){
    $("#userName").val("");
    $("#nameModal").openModal();
}

function startQuiz(){
    userName = $("#userName").val();
    if(userName == ""){
        notifyError("Please Enter your name!");
    } else{
        $("#welcomeMsg").html("Welcome to Quizyy! " +  $("#userName").val());
        $("#userName").val("");
        $("#nameModal").closeModal();
        $("#welcomeDiv").hide();
        $("#quizDiv").fadeIn();
    }
}

function notifyError(msg){
    Materialize.toast(msg, 3000, 'rounded');
}

//ques 1
function checkQuesOne(ansVal){
    userAnswerOne = ansVal;
    setTimeout(function(){
        $("#quesOne").hide();
        $("#quesTwo").fadeIn();
    }, 600);

}

//ques 2
function checkQuesTwo(ansVal){
    userAnswerTwo = ansVal;
    setTimeout(function(){
        $("#quesTwo").hide();
        $("#quesThree").fadeIn();        
    }, 600);
}


//ques 3
function checkQuesThree(ansVal){
    userAnswerThree = ansVal;
    setTimeout(function(){
        $("#quesThree").hide();
        $("#quesFour").fadeIn();
    }, 600);
}

//ques 4
function checkQuesFour(ansVal){
    userAnswerFour = ansVal;
    setTimeout(function(){
        $("#quesFour").hide();
        $("#quesFive").fadeIn();        
    }, 600);
}

//ques 5
function checkQuesFive(ansVal){
    userAnswerFive = ansVal;
    setTimeout(function(){
        $("#quizDiv").hide();
        $("#resultDiv").fadeIn();
        computerGraph();
    }, 600);
}


function computerGraph() {
    console.log(userAnswerOne + " ----");
    var correctCount = 0;
    if(userAnswerOne == answerOne){
        correctCount ++;
        $("#userAnsOne").addClass("correct");
    } else{
        $("#userAnsOne").addClass("incorrect");
    }
    if(userAnswerTwo == answerTwo){
        correctCount ++;
        $("#userAnsTwo").addClass("correct");
    } else{
        $("#userAnsTwo").addClass("incorrect");
    }
    if(userAnswerThree == answerThree){
        correctCount ++;
        $("#userAnsThree").addClass("correct");
    } else{
        $("#userAnsThree").addClass("incorrect");
    }
    if(userAnswerFour == answerFour){
        correctCount ++;
        $("#userAnsFour").addClass("correct");
    } else{
        $("#userAnsFour").addClass("incorrect");
    }
    if(userAnswerFive == answerFive){
        correctCount ++;
        $("#userAnsFive").addClass("correct");
    } else{
        $("#userAnsFive").addClass("incorrect");
    }

    $("#finalScore").html("Final Score: " + correctCount + "/5");


    $("#userAnsOne").html($("#a1_" + userAnswerOne).text());
    $("#userAnsTwo").html($("#a2_" + userAnswerTwo).text());
    $("#userAnsThree").html($("#a3_" + userAnswerThree).text());
    $("#userAnsFour").html($("#a4_" + userAnswerFour).text());
    $("#userAnsFive").html($("#a5_" + userAnswerFive).text());

    $("#oneAns").html("Bangalore");
    $("#twoAns").html("Silver");
    $("#threeAns").html("Shooter");
    $("#fourAns").html("Virat Kohli");
    $("#fiveAns").html("Chennai");

    $("#pieChart").attr("data-percent",20*correctCount);
    $("#pieChart").html(20*correctCount + "%");

    $(function() {
        $('.chart').easyPieChart({
            animate: 2000,
            barColor: "#2ec866"
        });
    });

}