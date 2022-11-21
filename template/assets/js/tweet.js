function tweet() {
    var pageTitle = document.title;
    var pageUrl = encodeURI(document.location);
    var link = "https://twitter.com/intent/tweet?text=" + pageTitle + "&url=" + pageUrl;
    var windowHeight = String(parseInt(screen.height / 2));
    var windowWidth = String(parseInt(screen.width / 3));
    var windowSize = "width=" + windowWidth + ",height=" + windowHeight;
    window.open(link, "newwindow", windowSize);
}