document.addEventListener("DOMContentLoaded", function () {
    const toc = document.querySelector(".toc-side");
    const tocSideWrapper = toc.querySelector("#toc-side-wrapper");
    const headings = document.querySelectorAll("#atcbody h2, #atcbody h3");

    if (headings.length === 0) {
        toc.style.display = "none";
        return;
    }

    const tocAtcbodyWrapper = document.createElement("div");
    headings[0].before(tocAtcbodyWrapper);
    tocAtcbodyWrapper.id = "toc-atcbody-wrapper";
    const tocAtcbody = tocAtcbodyWrapper.appendChild(document.createElement("div"));
    tocAtcbody.innerText = "Table of Contents";

    let dynamicID = 0;

    for (const heading of headings) {
        // -------side toc-------

        // IDがない場合は付与する
        if (heading.id === "") {
            heading.id = "toc-dynamic-" + dynamicID;
            dynamicID++;
        }

        const tocSideItemWrapper = tocSideWrapper.appendChild(document.createElement("li"));
        const tocSideItem = tocSideItemWrapper.appendChild(document.createElement("a"));
        tocSideItem.href = "#" + heading.id;

        // h3ならmargin-left20pxかつ幅が100%-20px
        if (heading.tagName === "H3") {
            tocSideItem.classList.add("toc-side-item-h3");
        }

        const tocSideItemDiv = tocSideItem.appendChild(document.createElement("div"));
        tocSideItemDiv.innerText = heading.innerText;

        // -------atcbody toc-------
        const tocAtcbodyItem = tocAtcbodyWrapper.appendChild(document.createElement("a"));
        tocAtcbodyItem.href = "#" + heading.id;
        
        const tocAtcbodyItemDiv = tocAtcbodyItem.appendChild(document.createElement("div"));
        tocAtcbodyItemDiv.innerText = heading.innerText;
    }
});