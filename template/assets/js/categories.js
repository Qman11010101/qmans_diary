document.addEventListener("DOMContentLoaded", async function () {
    const categories = await (await fetch("/category.json")).json()
    const categoryDisplay = document.getElementById("categorydisplay")
    for (const category of categories) {
        const ID = category.id
        const name = category.name
        const tagBlock = categoryDisplay.appendChild(document.createElement("div"))
        tagBlock.className = "tag"
        const link = tagBlock.appendChild(document.createElement("a"))
        link.href = "/articles/category/" + ID
        const nameBlock = tagBlock.appendChild(document.createElement("span"))
        nameBlock.innerText = name
    }
}, false)