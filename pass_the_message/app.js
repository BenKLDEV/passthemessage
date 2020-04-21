(function() {
  // select input element
  const form = document.querySelector('#message-form');

  //Set up Submit button
  form.addEventListener('submit', function(e) {
    e.preventDefault()  
    // get user input
    const message = document.querySelector('#message');
    const feedback = document.querySelector('.feedback');
    const messageContent = document.querySelector('.message-content');
  
    if (message.value === ''){
      feedback.classList.add('show')
      setTimeout(function(){
        feedback.classList.remove('show')
      }, 2000)
    } else 
    {
      messageContent.textContent = message.value;
      message.value = ''
    }

  })
})()