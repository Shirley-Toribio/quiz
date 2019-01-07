/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val().toLowerCase();
        var q2Result = $("#question2").val().toLowerCase();
        var q3Result = $("#question3").val().toLowerCase();
        var totalScore;
        if(q1Result="swimming"){
            totalScore=totalScore+1;
        }
        else if(q1Result="planting"){
            totalScore=totalScore+3;
        }
        else if(q1Result="roasting"){
            totalScore=totalScore+5;
        }
        else if(q1Result="flying"){
            totalScore=totalScore+7;
        }
        if(q2Result ="winter"){
            totalScore=totalScore+1;
        }
        else if(q2Result ="spring"){
            totalScore=totalScore+3;
        }
        else if(q2Result ="summer"){
            totalScore=totalScore+5;
        }
        else if(q2Result="fall"||q2Result="autumn"){
            totalScore=totalScore+7;
        }
        if(q3Result ="fishes"||q3Result="fish"){
            totalScore=totalScore+1;
        }
        else if(q3Result ="groundhogs"||q3Result="groundhog"){
            totalScore=totalScore+3;
        }
        else if(q3Result ="anteaters"||q3Result="anteater"){
            totalScore=totalScore+5;
        }
        else if(q3Result="birds"||q3Result="bird"){
            totalScore=totalScore+7;   
        }
    });

});
