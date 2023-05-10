const scriptURL = 'https://script.google.com/macros/s/AKfycbwdfjoDWWAlJD6tKnFah1XTDPWgkDg2ynbvSNVUK7d7fOLsxhbnwd_WQCeiDY_mF54Rww/exec'
const form = document.forms['Tousif-eXPENSE']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Succesfully Recorded..."))
        .catch(error => console.error('Error!', error.message))
})