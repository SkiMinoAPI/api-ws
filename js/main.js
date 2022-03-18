window.onload = function getAnnouncement() {
    var lbg = document.getElementById('lbg');
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "https://lolimstatic.ml/announcement.md");
    oReq.send();
    oReq.onreadystatechange = function () {
        if (oReq.readyState = 4) {
            showdownjs(oReq.responseText);//console.log(oReq.responseText);
        } else {
            lbg.innerHTML = "获取信息失败！";
        }
    }
}
function showdownjs(data) {
    var converter = new showdown.Converter(),
        html      = converter.makeHtml(data);
        lbg.innerHTML = html;
}

fetch('https://api.github.com/repos/SkiMinoTeam/API/commits').then(
		(response) => {
			response.json().then((data) => {
				const changeLogFrame=document.querySelector('#cms');
				data.forEach(commit => {
					const item=document.createElement('a');
					item.classList.add('item');
					item.href=commit.html_url;
					item.setAttribute('data-sha',commit.sha.slice(0,7));
					item.innerText=commit.commit.message;
					changeLogFrame.appendChild(item);
				});
			});
		}
	);