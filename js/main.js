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
});
