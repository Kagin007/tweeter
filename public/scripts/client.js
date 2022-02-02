/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const toggleBackTpTopBtn = () => {
//   if ($(window).scrollTop() > 0) {
//     $(".back-to-top")
//       .show()
//       .fadeIn("slow");
//   } else {
//     $(".back-to-top")
//       .hide()
//       .fadeOut("slow");
//   }
// };

$(document).ready(function() {
// // hide back to top button at initial render
// $(".back-to-top").hide();
// // call toggleBackTpTopBtn on page scroll
// $(window).scroll(toggleBackTpTopBtn);
// // clicking on back to top
// $(".back-to-top").on("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
//   toggleBackTpTopBtn();
// });

// const tweetData = [
//   {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
//   },
//   {
//   "user": {
//     "name": "Descartes",
//     "avatars": "https://i.imgur.com/nlhLi3I.png",
//     "handle": "@rd" },
//   "content": {
//     "text": "Je pense , donc je suis"
//     },
//   "created_at": 1461113959088
//   }
// ]

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets.reverse()) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($tweet);    
  };
};

//escape function to prevent XSS (cross site scripting)
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (data) {
const $tweet = $(`
  <article>
  <header>
    <div id='face-icon-and-name'>
      <img src=${data.user.avatars}>
      <span>${data.user.name}</span>
    </div>
    <div>${data.user.handle}</div>
  </header>
  <p id=tweet>${escape(data.content.text)}</p>
  <footer>
    <span>
      ${timeago.format(data.created_at)}
    </span>
    <icons>
      <i class="fas fa-flag fa-lg"></i>
      <i class="fas fa-retweet fa-lg"></i>
      <i class="fas fa-heart fa-lg"></i>
    </icons>
  </footer>
  </article>
`)
return $tweet
}

$("form").submit(function(event) {
  event.preventDefault();
  const charCounter = Number($('#char-counter').val())  
  
  if (charCounter < 0) {
    alert('too many characters for this tweet!\n 140 is the char limit')
  } else if (charCounter === 140) {
    alert('This tweet is empty!')
  } else {
    const serializedForm = $(this).serialize();
    $('#tweet-text').val("")
    //empty container to not append twice    
    // $('#tweets-container').empty();
    
    //post to database
    $.post('/tweets', serializedForm )
      .done(function () {
        $('#tweets-container').empty(); //causes bumping on submit

        //load tweets
        loadTweets()
    })
    //set textbox to empty
    // $('#tweet-text').val("")
  };
});

const loadTweets = function () {
  $.ajax('/tweets', {method: 'GET'})
  .then(function (data) {
    renderTweets(data)
  })
}

loadTweets()

});











