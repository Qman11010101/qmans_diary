document.addEventListener("DOMContentLoaded", async function () {
    const la_Pre = await fetch("/latest.json");
    const latestArticle = await(la_Pre).json();
    const recent = document.getElementById("recent-articles");
    for (let latc of latestArticle) {
        let ID = latc.id;
        let title = latc.title;
        let publishDate = latc.publishedAt.slice(0, 10);
        let recBlock = recent.appendChild(document.createElement("div"));
        recBlock.className = "recent";
        let pubDateBlock = recBlock.appendChild(document.createElement("div"));
        pubDateBlock.className = "recent-date";
        pubDateBlock.innerText = publishDate;
        let titleBlock = recBlock.appendChild(document.createElement("div"));
        titleBlock.className = "recent-title";
        let link = titleBlock.appendChild(document.createElement("a"));
        link.href = "/articles/" + ID + ".html";
        link.innerText = title;
    }
}, false);