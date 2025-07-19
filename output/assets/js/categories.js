document.addEventListener("DOMContentLoaded", async function () {
    const categories = await (await fetch("/category.json")).json();
    const categoryDisplay = document.getElementById("categorydisplay");
    for (const category of categories) {
        let ID = category.id;
        let name = category.name;
        let tagBlock = categoryDisplay.appendChild(document.createElement("div"));
        tagBlock.className = "tag";
        let link = tagBlock.appendChild(document.createElement("a"));
        link.href = "/articles/category/" + ID;
        let nameBlock = tagBlock.appendChild(document.createElement("span"));
        nameBlock.innerText = name;
    }
}, false);