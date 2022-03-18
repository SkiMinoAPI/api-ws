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
			const changeLogFrame = document.querySelector('#cms');
			data.forEach(commit => {
				const item = document.createElement('a');
				item.classList.add('item');
				item.href = commit.html_url;
				item.setAttribute('data-sha',commit.sha.slice(0,7));
				item.innerText = commit.commit.message;
				changeLogFrame.appendChild(item);
			})
		})
	}
)

fetch('https://lolimstatic.ml/counts/apis.json').then(
    (response) => {
        response.json().then((data) => {
            const apiListFrame = document.querySelector('#als');
            const api = document.createElement('a');
            api.classList.add('btns');
            api.classList.add('button');
            api.classList.add('apilist');
            var rns = Math.round(Math.random()*10);
            colors = ["blue","red","white","orange","pink","green","yellow","skyblue","purple","gray"];
            api.style.background = colors[rns];
            api.style.width = '200px';
            var lstd = Math.round(Math.random()*data[0].counts);
            api.href = 'https://docs.lolimapis.ml/API/'+ data[0].list[lstd] +'/';
            var xhr = new XMLHttpRequest;
            xhr.open("GET", 'https://lolimstatic.ml/counts/apis/zh.json');
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState = 4) {
                    const res = xhr.responseText;
                    lnm = data[0].list[lstd];
                    api.innerText = res.lnm;
                    apiListFrame.appendChild(api);
                }
            }
        })
    }
)