
$(document).ready(function(){
  $("form#count").submit(function(event){
    event.preventDefault();

    var countToNumber = parseInt($("input#countTo").val());
    var countByNumber = parseInt($("input#countBy").val());
    var test = (countToNumber/countByNumber);

    if (countByNumber&&countToNumber){
      if (test < 1){
        alert("Please enter valid inputs");
      } else {
          for (var index = 1; index <= test; index += 1){
            var total = countByNumber * index;
            alert(total);
        };
      };
    } else {
        alert("Please enter a numeric value");
      };
  });
});
