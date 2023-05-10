const scriptURL = 'https://script.google.com/macros/s/AKfycbybKlk0Q1IparNgzZpkM665I0ieOqEuLjCrOZQfB7R0vYyFkNFPirxUWFJsa34NiCQGMA/exec'
const form = document.forms['others-eXPENSE']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Succesfully Recorded..."))
        .catch(error => console.error('Error!', error.message))
})