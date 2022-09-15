
$(document).ready(function(){
    $("#one").click(function(){
        $("#card").toggle();
        $("#carb").hide();
       
    })
    
    $("#two").click(function(){
        $("#card").hide();
        $("#carb").toggle();
    })
     
    $("#three").click(function(){
        $("#carb").hide();
        $("#cart").toggle();
    })
     
    $("#four").click(function(){
        $("#cart").hide();
        $("#cars").toggle();
    })
     
    $("#five").click(function(){
        $("#cars").hide();
        $("#carl").toggle();
    })

})
