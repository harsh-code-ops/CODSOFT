const scriptURL = 'https://script.google.com/macros/s/AKfycbybgcIj4XWi1PMm-82DixoP0gR2g_d_zAIC7E1HQIcNZcbvsfz7wv2d1Vh3Gjo5ZvS_zA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})