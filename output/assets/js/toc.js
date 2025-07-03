document.addEventListener("DOMContentLoaded", function () {
    const toc = document.querySelector(".toc-side");
    const tocSideWrapper = toc.querySelector("#toc-side-wrapper");
    const headings = document.querySelectorAll("#atcbody h2, #atcbody h3");

    if (headings.length === 0) {
        toc.style.display = "none";
        return;
    }

    const tocAtcbodyWrapper = document.createElement("details");
    headings[0].before(tocAtcbodyWrapper);
    tocAtcbodyWrapper.id = "toc-atcbody-wrapper";
    tocAtcbodyWrapper.open = true;
    const tocAtcbodyTitle = tocAtcbodyWrapper.appendChild(document.createElement("summary"));
    tocAtcbodyTitle.innerText = "Table of Contents";
    tocAtcbodyTitle.className = "toc-atcbody-title";
    const tocAtcbodyUl = tocAtcbodyWrapper.appendChild(document.createElement("ul"));

    let dynamicID = 0;

    for (const heading of headings) {
        // -------side toc-------

        // IDがない場合は付与する。IDがある場合は後ろにdynamicIDを付与する（同じIDが存在する場合の対策）
        if (heading.id === "") {
            heading.id = "toc-dynamic-" + dynamicID;
        } else {
            heading.id = heading.id + String(dynamicID);
        }
        dynamicID++;

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
        const tocAtcbodyItemWrapper = tocAtcbodyUl.appendChild(document.createElement("li"));
        const tocAtcbodyItem = tocAtcbodyItemWrapper.appendChild(document.createElement("a"));
        tocAtcbodyItem.href = "#" + heading.id;

        // h3ならmargin-left20pxかつ幅が100%-20px
        if (heading.tagName === "H3") {
            tocAtcbodyItem.classList.add("toc-atcbody-item-h3");
        }

        const tocAtcbodyItemDiv = tocAtcbodyItem.appendChild(document.createElement("div"));
        tocAtcbodyItemDiv.innerText = heading.innerText;
    }
});