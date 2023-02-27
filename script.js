const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')

        e.target.innerHTML = 'Dark mode'
    }
    else {
        html.classList.add('dark')

        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const milliseconds = time.getMilliseconds();

    const hoursForClock = hours % 24
    
    const hourAngle = (hours % 12) * 30 +(minutes / 60) * 30
    const minuteAngle = minutes * 6 + (seconds / 60) * 6
    const secondAngle = (seconds + milliseconds / 1000) * 6
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setInterval(setTime, 1)
