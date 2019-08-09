'use strict'

$("#neck").click(function(){
    $("body").hide();
});

$("h1").mouseenter(function(){
    $("body").css("background-image", "url(peep.jpg)");

})

$("#be").click(function(){
    $(".why").css("background-color", "lavender");

})

$("#poyo").dblclick(function(){
$("#ok").animate({left:'300px'});
$("#ok").animate({height:'200px'});
$("#ok").animate({left:'100px'});
$("#ok").animate({left:'150px'});
$("#ok").animate({left:'300px'});
$("#ok").animate({height:'800px'});
$("#ok").animate({ height:'100%', width:'100%'});
})

$("#heya").on("click", function(){
    $(this).hide();
  });

  $("p").mouseleave(function(){
    $(this).css("font-size",$("#sarah").val() + "px");
});

$("h2").mouseenter(function(){
    $(this).css("color", $("#Jamison").val());

})

$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("http://taco-randomizer.herokuapp.com/random/", 
      function(result){
          $.each(result, function(i, field){
            $("#u").append("<tr>" 
              + "<th>" + field.name + "</th>" + "<th>" + "<a href=" + field.url + ">" +  "HERE!" + "</a>"
              + "</th>"
              + "</tr>");
           });
      });
    });
  });
  
  $(document).ready(function(){
    $("#caramba").mouseleave(function(){
      $.getJSON("http://jservice.io/api/random ", 
      function(result){
          $.each(result, function(i, data){
            $("#a").append("<tr>" 
              + "<th>" + data.question + "</th>" + "<th id='ahem'>"  +  data.answer + "</a>"
              + "</th>"
              + "</tr>");
            });
      });
    });
  });
//try to hide answer

$(document).ready(function(){
  $("#tu").dblclick(function(){
    $.getJSON("https://ghibliapi.herokuapp.com/films", 
    function(result){
        $.each(result, function(i, cat){
          $("#yo").append( cat.title + "    "  +  cat.release_date + "</br>");
          });
    });
  });
});
      

  
