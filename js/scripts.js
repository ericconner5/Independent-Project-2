$(function () {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();


    var logic = 0;
    var web = 0;
    var style = 0;

    if (answer1 === "logic") {
    logic++;
  }   else if ( answer1 === "web") {
    web++;
  } else (answer1 === "style")
    style++;


  if (answer2 === "logic") {
  logic++;
}   else if ( answer2 === "web") {
  web++;
} else (answer2 === "style")
  style++;


  if (answer3 === "logic") {
  logic++;
}   else if ( answer3 === "web") {
  web++;
}   else {style++;
}


  if (answer4 === "logic") {
logic++;
}   else if ( answer4 === "web") {
  web++;
} else (answer4 === "style")
  style++;

  if (answer5 === "logic") {
logic++;
}   else if ( answer5 === "web") {
  web++;
} else (answer5 === "style")
  style++;

if (logic >= web && logic >= style) {
  $(".logic").show();
  $(".web").hide();
  $(".style").hide();
} else if (web >= logic && web >= style) {
  $(".logic").hide();
  $(".web").show();
  $(".style").hide();
} else (style >= logic && style >= web)
  $("logic").hide();
  $(".web").hide();
  $(".style").show();

window.scrollTo({
  top:document.body.scrollHeight,
  behavior: "smooth"
  });
$('input[type="radio"]').prop('checked', false);
});
});
