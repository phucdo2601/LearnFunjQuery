// const func1 = () => {
//     document.getElementById('img1').style.width = "500px";
// }

// $("button").click(func1);

// function func1 () {
//     $("#img1").css("width", '500px');
// }

// event handler in jquery
// $("button").click(function() {
//     $("#img1").css('width', '500px')
// });

// $("document").ready(function() {
//     // $("button").dblclick(function() {
//     //     $("#img1").css('width', '500px')
//     // });

//     // $("#img1").mouseenter(function() {
//     //     $("#img1").css("width", "500px");
//     // });

//     // $("#img1").mouseleave(function() {
//     //     $("#img1").css("width", "250px");
//     // });

//     // $("#img1").hover(func1,func2)
//     // function func1() {
//     //     $("#img1").css("width","500px");
//     // }

//     // function func2() {
//     //     $("#img1").css("width","250px");
//     // }

//     // $("#btn1").click(function() {
//     //     $("#img1").hide(2000);
//     // });

//     // $("#btn2").click(function() {
//     //     $("#img1").show(2000);
//     // })

//     // $("#btn3").click(function() {
//     //     $("#img1").toggle(2000);
//     // })

//     // $("#btn4").click(function() {
//     //     $("#img1").fadeIn(2000)
//     // })

//     // $("#btn5").click(function() {
//     //     $("#img1").fadeOut(2000)
//     // })

//     // $("#btn6").click(function() {
//     //     $("#img1").fadeToggle(2000)
//     // })

//     // $("#btn7").click(function() {
//     //     $("#img1").slideUp(2000);

//     // })

//     // $("#btn8").click(function() {
//     //     $("#img1").slideDown(2000)
//     // })

//     // $("#btn9").click(function() {
//     //     $("#img1").slideToggle(2000)
//     // })

//     // $("#btn10").click(function() {
//     //     $("#img1").stop()
//     // })

// });

$("document").ready(function() {
    $("#btn").click(function() {
        $("#img1").animate({
            left: "600px",
            opacity: "1",
            height:"400px",
            width: "400px"
        }, 'slow');
    })
})