$("document").ready(function() {
    // $("#btn").click(function() {
    //     $("#img1").animate({
    //         left: "600px",
    //         opacity: "1",
    //         height:"400px",
    //         width: "400px"
    //     }, 'slow', function() {
    //         alert("Animated");
    //     });

        
    // })

    // $("#btn").click(function() {
    //     $("#img1").slideUp(2000, function(){
    //         $("#img1").slideDown(2000);
    //     })
    // })

    $("#btn").click(function() {
        $("#img1").slideUp(2000, function(){
            $("#img1").slideDown(2000).css('opacity', '1').slideDown(3000).fadeOut(2000).fadeIn(2000);
        })
    })
})