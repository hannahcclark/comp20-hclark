function parse () {
	request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readystate == 4 && request.status == 200) {
			console.log(request.response);
		}
		console.log(request.readystate);
	};
	request.responseType = "json"
	request.open("get", "data.json", true);
	request.send();
}

