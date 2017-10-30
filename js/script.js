//Back End
var points = 0;




//UI
$(document).ready(function() {
  $("#questions").submit(function(e) {
    event.preventDefault();
    var situation1 = $("#situation1").val();
    var situation2 = $("#situation2").val();

    if (situation1 === "1") {
      points += 100
    } else if (situation1 === "2") {
      points += 50
    } else if (situation1 === "3") {
      points += 1
    } else if (situation1 === "4") {
      points += 500
    } else if (situation1 === "0") {
      alert("Hey, you didn't select anything...Try again!")
      confirm("Did you do it?")
    }

    if (situation2 === "1") {
      points += 100
    } else if (situation2 === "2") {
      points += 1
    } else if (situation2 === "3") {
      points += 50
    } else if (situation2 === "4") {
      points += 500
    } else if (situation1 ==="0") {
      alert("Thanks Lil B")
    }

    if (points  < 3 && points >1) {
      $("#niall").show();
      $("#harry").hide();
      $("#zayn").hide();
      $("#liam").hide();
    } else if (points > 4 && points < 101) {
      $("#liam").show();
      $("#harry").hide();
      $("#zayn").hide();
      $("#niall").hide();
    } else if (points > 101 && points <250) {
      $("#harry").show();
      $("#zayn").hide();
      $("#niall").hide();
      $("#liam").hide();
    } else if (points >599) {
      $("#zayn").show();
      $("#harry").hide();
      $("#liam").hide();
      $("#niall").hide();
    }



  });
});
