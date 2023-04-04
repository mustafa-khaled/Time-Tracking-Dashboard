const spans = document.querySelectorAll(".links span");
const hours = document.querySelectorAll("#hours");
const timeTracking = document.querySelectorAll("#time-tracking");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");



spans.forEach(function (ele) {
    ele.onclick = function () {
        spans.forEach(function (e) {
            e.classList.remove("active");
        });
        this.classList.add("active");
    }
});

function dailyData() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = `${data[i].timeframes.daily.current} hrs`;
                timeTracking[i].innerHTML = `Last Daily - ${data[i].timeframes.daily.previous} hrs`;
            })
        })
}


function weeklyData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = `${data[i].timeframes.weekly.current} hrs`;
                timeTracking[i].innerHTML = `Last Weekly - ${data[i].timeframes.weekly.previous} hrs`;
            })
        })
}

function monthlyData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e, i) => {
                hours[i].innerHTML = `${data[i].timeframes.monthly.current} hrs`;
                timeTracking[i].innerHTML = `Last Monthly - ${data[i].timeframes.monthly.previous} hrs`;
            })
        })
}


daily.addEventListener('click', () => {
    dailyData()
})

weekly.addEventListener('click', () => {
    weeklyData()
})

monthly.addEventListener('click', () => {
    monthlyData()
})