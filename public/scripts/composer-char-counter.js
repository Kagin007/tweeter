$(document).ready(function() {

  $("#tweet-text").on("input", function() {
    const charCounter = ($(`#${this.id}`).parent().next().find('.counter'));

    let currentCounter = $(charCounter).val();
    if (currentCounter <= -1 || currentCounter === 0) {
      $(charCounter).addClass('red-text');
    } else {
      $(charCounter).removeClass('red-text');
    }

    $(charCounter).val(140 - this.value.length);
  });
});