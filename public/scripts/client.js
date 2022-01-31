/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const toggleBackTpTopBtn = () => {
  if ($(window).scrollTop() > 0) {
    $(".back-to-top")
      .show()
      .fadeIn("slow");
  } else {
    $(".back-to-top")
      .hide()
      .fadeOut("slow");
  }
};

$(document).ready(function() {
  // hide back to top button at initial render
  $(".back-to-top").hide();
  // call toggleBackTpTopBtn on page scroll
  $(window).scroll(toggleBackTpTopBtn);
  // clicking on back to top
  $(".back-to-top").on("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    toggleBackTpTopBtn();
  });
});