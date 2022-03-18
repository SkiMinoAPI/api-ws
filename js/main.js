window.onload = function getAnnouncement() {
    var xhr = new XMLHttpRequest;
    var lbg = document.getElementById('lbg');
    xhr.open("GET", "https://lolimstatic.ml/announcement.md");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.reponseText != undefined) {
            var converter = new showdown.Converter(),
                text      = xhr.reponseText,
                html      = converter.makeHtml(text);
                lbg.innerHTML = html;
        } else {
            lbg.innerHTML = "获取公告失败！";
        }
    }
}