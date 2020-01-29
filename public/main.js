init();

//   <!-- banner01 -->

$("#banner01_replayMe").click(function() {
    var iframe = document.getElementById("banner01_SWF");
    iframe.src = iframe.src;
});

//  <!-- banner02 -->
$("#banner02_replayMe").click(function() {
    var iframe = document.getElementById("banner02_SWF");
    iframe.src = iframe.src;
});

// <!--banner03-- >
$("#banner03_replayMe").click(function() {
    var iframe = document.getElementById("banner03_SWF");
    iframe.src = iframe.src;
});



function init() {



    // $("#banner01").toggle();
    // $("#banner02").toggle();
    // $("#banner03").toggle();
    // $("#banner04").toggle();
    // $("#banner05").toggle();
    // $("#banner06").toggle();
    // $("#banner07").toggle();




}

function hideMe(v1, v2, v3, v4) {

    $(v1).hide("slow");
    $(v2).hide("slow");
    $(v3).hide("slow");
    $(v4).show(500);
}

function showMe(v1, v2, v3, v4) {
    $(v1).show(500);
    $(v2).show(500);
    $(v3).show(500);
    $(v4).hide("slow");
}