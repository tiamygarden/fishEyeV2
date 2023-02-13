const modal = document.getElementById('contactModal');

function displayModal(name) {
    modal.getElementsByClassName('photograph-name')[0].innerHTML = name
    modal.classList.add('visible')
    modal.getElementsByTagName('input')[0].focus()
}

function closeModal() {
    modal.classList.remove('visible')
}

function handleContactSubmit(event) {
    event.preventDefault()

    const data = new Map()

    Array.from(event.target).forEach(el => {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
            data.set(el.name, el.value)
        }
    })

    console.log(data)
}