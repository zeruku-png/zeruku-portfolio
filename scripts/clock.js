function twoDigit(num) {
    let ret;
    if (num < 10) {
        ret = "0" + num;
    } else {
        ret = num
    };
    return ret;
}

function showClock() {
    let nowTime = new Date();
    let nowHour = twoDigit(nowTime.getHours());
    let nowMin = twoDigit(nowTime.getMinutes())
    let msg = nowHour + ":" + nowMin
    document.getElementById("clock").innerHTML = msg
}

setInterval('showClock()', 1000)