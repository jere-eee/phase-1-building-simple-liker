// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = Array.from(document.querySelectorAll('li span'))
hearts.forEach((heart) => {
  heart.addEventListener('click', (e) => {
    e.preventDefault();
    if (heart.classList.contains('activated-heart')) {
      heart.innerHTML = EMPTY_HEART;
      heart.className = ''
    } else {
      mimicServerCall()
      .then((res) => {
        heart.innerHTML = FULL_HEART;
        heart.className = 'activated-heart';
      })
      .catch((err) => {
        const errorMd = document.querySelector('.hidden')
        errorMd.className = '';
        document.querySelector('#modal p').innerHTML = err
        function removeMd() {
          return errorMd.className = 'hidden'
        }
        setTimeout(removeMd, 3000)
      })
    }
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
