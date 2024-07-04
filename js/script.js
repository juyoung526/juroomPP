$(function () {
  // header
  let top0 = $("#section0").offset().top;
  let top1 = $("#section1").offset().top;
  let top2 = $("#section2").offset().top;
  let top3 = $("#section3").offset().top;
  let top4 = $("#section4").offset().top;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (scroll >= top0 && scroll <= top1) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(0).addClass("on");
      $("#section0 h2").addClass("embo");
    }
    if (scroll >= top1 && scroll <= top2) {
      $(".navi .on").stop().animate({ height: "192px;" });
      $(".navi li").removeClass("on");
      $(".navi li").eq(1).addClass("on");
      $("#section0 h2").removeClass("embo");
    }
    if (scroll >= top2 && scroll <= top3) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(2).addClass("on");
      $("#section0 h2").removeClass("embo");
    }
    if (scroll >= top3 && scroll <= top4) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(3).addClass("on");
      $("#section0 h2").removeClass("embo");
    }
    if (scroll >= top4) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(4).addClass("on");
      $("#section0 h2").removeClass("embo");
    }
  });
  //   logo
  $("header h1").on("click", function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });
  //   section0
  $(".top").stop().animate({ height: "370px" }, 1000);

  $(".bottom").stop().animate({ height: "190px" }, 1000);

  $("#section0 .right").stop().animate({ width: "1300px" }, 2000);

  $(".left p")
    .stop()
    .animate({ height: "100%" }, 2000, function () {
      $("h2").addClass("embo");
    });

  // navi
  $(".navi li").on("click", function () {
    let upDown = $(this).index();
    let move = $("#container > div").eq(upDown).offset().top;
    $("html,body").stop().animate({ scrollTop: move });
  });

  // section1

  // section2
  $("#section2 .One").on("mouseenter", function () {
    $("#section2 .one").toggleClass("on");
  });
  $("#section2 .Two").on("mouseenter", function () {
    $("#section2 .two").toggleClass("on");
  });
  $("#section2 .Thiree").on("mouseenter", function () {
    $("#section2 .thiree").toggleClass("on");
  });
  $("#section2 .Four").on("mouseenter", function () {
    $("#section2 .four").toggleClass("on");
  });
  $("#section2 .One").on("mouseleave", function () {
    $("#section2 p").removeClass("on");
  });
  $("#section2 .Two").on("mouseleave", function () {
    $("#section2 p").removeClass("on");
  });
  $("#section2 .Thiree").on("mouseleave", function () {
    $("#section2 p").removeClass("on");
  });
  $("#section2 .Four").on("mouseleave", function () {
    $("#section2 p").removeClass("on");
  });

  // section3
  $(".subTitle li").on("click", function () {
    i = $(this).index();
    console.log(i);
    $(".Image li").addClass("back");
    $(".Image li").stop().animate({ left: "516px" });
    $(".Image li").eq(i).stop().animate({ left: "0" });
    $(".Text li").css("display", "none");
    $(".Text li").eq(i).css("display", "block");
  });

  // section4
  $("#section4 .big li").on("click", function () {
    i = $(this).index();
    $("#section4 .small li").css({ opacity: "0" });
    $("#section4 .small li").eq(i).css({ opacity: "1" });
    $("#section4 .big li:first-child").css({ animation: "none" });
  });
});
