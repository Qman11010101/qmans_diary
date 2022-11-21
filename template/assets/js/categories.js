async function getCategory() {
    const categories = await (await fetch("/category.json")).json();
    const categoryDisplay = document.getElementById("categorydisplay");
    for (let i = 0; i < categories.length; i++) {
        let ID = categories[i].id;
        let name = categories[i].name;
        let tagBlock = categoryDisplay.appendChild(document.createElement("div"));
        tagBlock.className = "tag";
        let link = tagBlock.appendChild(document.createElement("a"));
        link.href = "/articles/category/" + ID;
        let nameBlock = tagBlock.appendChild(document.createElement("span"));
        nameBlock.innerText = name;
    }
}

getCategory();