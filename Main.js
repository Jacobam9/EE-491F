$("button").html( "Next Step..." )

$(document).ready(function() {
    console.log("ready!");
    $("button").html("Add background color")
    $("button").on("click", function( event ) {
        $(".webpage").toggleClass("change");
    });
});