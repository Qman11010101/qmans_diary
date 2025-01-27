document.addEventListener("DOMContentLoaded", function () {
    const tocWrapper = document.querySelector("#toc-wrapper");
    const headings = document.querySelectorAll("#atcbody h2, #atcbody h3");

    let dynamicID = 0;

    for (const heading of headings) {
        // IDがない場合は付与する
        if (heading.id === "") {
            heading.id = "toc-dynamic-" + dynamicID;
            dynamicID++;
        }

        const tocItem = tocWrapper.appendChild(document.createElement("a"));
        tocItem.href = "#" + heading.id;
        tocItem.innerText = heading.innerText;

        // h3ならmargin-left20pxかつ幅が100%-20px
        if (heading.tagName === "H3") {
            tocItem.style.marginLeft = "20px";
            tocItem.style.width = "calc(100% - 20px)";
        }
    }
});