function parse () {
	request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			request.response.forEach(function (val, i, arr) {
				messagesDiv = document.getElementById('messages');
				messagesDiv.innerHTML += '<div class="message"><p class="content"> - ' + val['content'] + '</p><p class="sender">' + val['username'] + '</p></div>' ;
			})
		}

	};
	request.responseType = "json"
	request.open("get", "data.json", true);
	request.send();
}

