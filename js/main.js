
$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
        autoplay: true,

    });
  });
  
  
  function scrl() {
    var qx = document.getElementById("scroll-about");
  qx.scrollIntoView();
  };
function goHome() {
    var gotop = document.getElementById("top-page");
    gotop.scrollIntoView();
}
