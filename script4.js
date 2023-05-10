const scriptURL = 'https://script.google.com/macros/s/AKfycbznQ0sjlbBubX0fiMl7jEoLQa6GaPdZTVfIawNpxu6AfgCh8-bt0UdtzriJKosEFDu-Yg/exec'
const form = document.forms['Tousif-eXPENSE']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Succesfully Recorded..."))
        .catch(error => console.error('Error!', error.message))
})


