document.addEventListener("DOMContentLoaded", function() {
    const timeTxt = document.querySelector("#maincol > section:nth-child(1) > div.date").innerText;
    const time = timeTxt.includes("更新") ? new Date(timeTxt.match(/\((.*?) 更新\)/))[1] : new Date(timeTxt);
    console.log(time);
    // const tcw = document.getElementById("time-course-warning");
}, false);