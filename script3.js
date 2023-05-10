const scriptURL = 'https://script.google.com/macros/s/AKfycbzz882CZVXIzAJ2D-cUhERjnhLYtXRzo5gk5i1i0W8luWSSZSgXVzaoYVQy8Mz1DEJjqA/exec'
const form = document.forms['Ehtesham-eXPENSE']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Succesfully Recorded..."))
        .catch(error => console.error('Error!', error.message))
})



