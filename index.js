const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

const updateTime = () => {
    let date = new Date()
    secToDeg = (date.getSeconds() / 60) * 360
    minToDeg = (date.getMinutes() / 60) * 360
    hrToDeg = (date.getHours() / 12) * 360
    second.style.transform = `rotate(${secToDeg}deg)`
    minute.style.transform = `rotate(${minToDeg}deg)`
    hour.style.transform = `rotate(${hrToDeg}deg)`
};

setInterval(updateTime, 1000)

updateTime()