window.onload = function getAnnouncement() {
    var xhr = new XMLHttpRequest;
    var lbg = document.getElementById('lbg');
    xhr.open("GET", "https://lolimstatic.ml/announcement.md");
    xhr.send();
        if (xhr.status = 200) {
            var converter = new showdown.Converter(),
                text      = xhr.ReponseText,
                html      = converter.makeHtml(text);
                lbg.innerHTML = html;
        } else {
            lbg.innerHTML = "获取公告失败！";
        }
    
}