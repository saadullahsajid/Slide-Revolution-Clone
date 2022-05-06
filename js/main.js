$(document).ready(function () {
  // custom cursor code start
  $(document).mousemove(function (e) {
    $(".cursor").eq(0).css({
      left: e.clientX,
      top: e.clientY,
    });
    setTimeout(function () {
      $(".cursor").eq(1).css({
        left: e.clientX,
        top: e.clientY,
      });
    }, 100);
  });
  //   custom cursor code end

  //   parallax effect on top images on mouse move code start
  $(window).on("mousemove", function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function (i, el) {
      var offset = parseInt($(el).data("offset"));
      var translate =
        "translate3d(" +
        Math.round(offsetX * offset) +
        "px," +
        Math.round(offsetY * offset) +
        "px, 0px)";

      $(el).css({
        "-webkit-transform": translate,
        transform: translate,
        "moz-transform": translate,
      });
    });
  });

  //   parallax effect on top images on mouse move code end
});
