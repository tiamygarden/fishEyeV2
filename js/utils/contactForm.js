const modal = document.getElementById('contactModal');
let closeListenerController

function displayModal(name) {
    modal.getElementsByClassName('photograph-name')[0].innerHTML = name
    modal.classList.add('visible')
    modal.getElementsByTagName('input')[0].focus()
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    closeListener()
}

function closeModal() {
    modal.classList.remove('visible')
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
    closeListenerController.abort()
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

function closeListener() {
    closeListenerController = new AbortController()
    window.addEventListener('keyup', function (e) {
        if (e.code === 'Escape') {
            closeModal()
        }
    }, {signal: closeListenerController.signal})

}