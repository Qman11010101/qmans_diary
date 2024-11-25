document.addEventListener("DOMContentLoaded", function () {
    // レンダリング完了後実行する部分
    const articleBody = document.getElementById("atcbody").children;
    for (let i = 0; i < articleBody.length; i++) {
        // DIVかつdata-filename属性を持つ場合、中のPREの前(一番先頭)にファイル名ブロックを追加し、divにcodeblock-marginクラスを付与
        // また、中のcodeにhljsクラスを付与
        // 中のCODEのborder-radiusを0 20px 20pxにする
        if (articleBody[i].tagName === "DIV" && articleBody[i].hasAttribute("data-filename")) {
            let filename = articleBody[i].getAttribute("data-filename");
            let filenameBlock = document.createElement("div");
            filenameBlock.className = "code-filename";
            filenameBlock.innerText = filename;
            articleBody[i].prepend(filenameBlock);

            let codeBlock = articleBody[i].querySelector("code");
            codeBlock.classList.add("hljs");
        }
    }
    
    hljs.highlightAll();
}, false);