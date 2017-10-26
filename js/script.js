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
      alert("Hey, you didn't select anything. Try again!")
      confirm("do you get it?")
      alert("Good, now try again.")
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
      $("#bellatrix").hide();
      $("#mcgonagall").hide();
      $("#neville").hide();
      $("#draco").show();
    } else if (points > 4 && points < 101) {
      $("#bellatrix").hide();
      $("#mcgonagall").hide();
      $("#draco").hide();
      $("#neville").show();
    } else if (points > 101 && points <250) {
      $("#draco").hide();
      $("#mcgonagall").hide();
      $("#neville").hide();
      $("#bellatrix").show();
    } else if (points >599) {
      $("#bellatrix").hide();
      $("#draco").hide();
      $("#neville").hide();
      $("#mcgonagall").show();
    }



  });
});
