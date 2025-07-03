document.addEventListener("DOMContentLoaded", async function () {
    const la_Pre = await fetch("/latest.json")
    const latestArticle = await (la_Pre).json()
    const recent = document.getElementById("recent-articles")
    for (const latc of latestArticle) {
        const ID = latc.id
        const title = latc.title
        const publishDate = latc.publishedAt.slice(0, 10)
        const recBlock = recent.appendChild(document.createElement("div"))
        recBlock.className = "recent"
        const pubDateBlock = recBlock.appendChild(document.createElement("div"))
        pubDateBlock.className = "recent-date"
        pubDateBlock.innerText = publishDate
        const titleBlock = recBlock.appendChild(document.createElement("div"))
        titleBlock.className = "recent-title"
        const link = titleBlock.appendChild(document.createElement("a"))
        link.href = "/articles/" + ID + ".html"
        link.innerText = title
    }
}, false)