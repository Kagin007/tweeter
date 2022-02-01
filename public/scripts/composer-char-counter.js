$(document).ready(function() {

  $("#tweet-text").on("input", function() {
    // let textLength = this.value.length
    // console.log(textLength)
    const charCounter = ($(`#${this.id}`).parent().next().find('.counter'))
    // console.log(this)
    // console.log(this.parents())

    // console.log(Array.from(charCounter))

    let currentCounter = $(charCounter).val();
    if (currentCounter < 0) {
      $(charCounter).addClass('red-text')
    } else {
      $(charCounter).removeClass('red-text')
    }

    $(charCounter).val( 140 - this.value.length);
  })
});