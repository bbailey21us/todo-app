$("li").on("click",function(){
    $(this).toggleClass("completed");
});

$("span").on("click",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$('input[type="text"]').keypress(function(event){
    if (event.which===13){
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li>"+todoText+"</li>")
    }
});