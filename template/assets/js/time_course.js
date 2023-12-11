document.addEventListener("DOMContentLoaded", function () {
    const timeTxt = document.querySelector("#maincol > section:nth-child(1) > div.date").innerText;
    const time = timeTxt.includes("更新") ? new Date(timeTxt.match(/\((.*?) 更新\)/)[1]) : new Date(timeTxt);
    const now = new Date();
    const diff = now - time;
    const diffYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    const tcw = document.getElementById("time-course-warning");
    if (diffYear >= 1) {
        tcw.style.display = "block";
        tcw.innerText = "この記事は最終更新から" + String(diffYear) + "年以上が経過しています。";
    }
}, false);