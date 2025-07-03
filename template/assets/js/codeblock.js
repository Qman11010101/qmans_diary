document.addEventListener("DOMContentLoaded", function () {
    // レンダリング完了後実行する部分
    const articleBody = document.getElementById("atcbody").children
    for (const atc of articleBody) {
        // DIVかつdata-filename属性を持つ場合、中のPREの前(一番先頭)にファイル名ブロックを追加し、divにcodeblock-marginクラスを付与
        // クラスhljsを付加する
        // 最後にhljs.highlight()する
        if (atc.tagName === "DIV" && atc.hasAttribute("data-filename")) {
            const filename = atc.getAttribute("data-filename")
            const filenameBlock = document.createElement("div")
            filenameBlock.className = "code-filename"
            filenameBlock.innerText = filename
            atc.prepend(filenameBlock)

            const codeBlock = atc.querySelector("code")
            codeBlock.classList.add("hljs")
        }
    }

    hljs.highlightAll()
}, false)