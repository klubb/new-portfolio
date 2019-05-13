console.log("%c Patrolling the Mojave almost makes you wish for a nuclear winter.", "color: #f442c8")

const hamburger = document.querySelector('.hamburger'),
    splash = document.querySelector('.splash'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    html = document.querySelector('html'),
    bars = document.querySelectorAll('.hamburger h1')

let counter = 0,
    toggle = true

function handleEnter() {
    toggle = true
}

function nav(type) {
    const target = document.querySelector(`.${type}`)
    target.scrollIntoView()
    closeNav()
}

function openNav() {
    if (!toggle) return
    else toggle = false
    if (body.style.overflow === 'hidden') closeNav()
    else {
        html.style.overflow = 'hidden'
        overlay.classList.remove('overlay-fadeOut')
        overlay.classList.add('overlay-fadeIn')
        splash.removeEventListener('animationend', handleEnter)
        bars.forEach(bar => bar.classList.remove('hamburger-collapse', 'hamburger-expand1', 'hamburger-expand2'))
        bars.forEach(bar => bar.classList.add('hamburger-collapse'))
        body.style.overflow = 'hidden'
        splash.classList.remove('splash-collapse')
        splash.classList.add('splash-expand')
        splash.addEventListener('animationend', () => toggle = true)
    }
}

function closeNav() {
    html.style.overflow = 'visible'
    overlay.classList.remove('overlay-fadeIn')
    overlay.classList.add('overlay-fadeOut')
    splash.removeEventListener('animationend', () => toggle = true)
    bars.forEach((bar, index) => {
        if (index === 0) bar.classList.add('hamburger-expand1')
        else if (index === 2) bar.classList.add('hamburger-expand2')
    })
    splash.classList.remove('splash-expand')
    splash.classList.add('splash-collapse')
    body.style.overflowY = 'visible'
    splash.addEventListener('animationend', handleEnter)
}

function description(type) {
    const main = document.querySelector('#main')
    main.style.display = 'none'
    const project = document.querySelector(`.${type}`)
    project.scrollIntoView()
    project.style.visibility = 'visible'
}

function closeProject(type) {
    const main = document.querySelector('#main'),
    projects = document.querySelector('.projects'),
    target = document.querySelector(`.${type}`)
    main.style.display = 'block'
    projects.scrollIntoView()
    target.style.visibility = 'hidden'
}