function writeMessages () {
	if (this.readystate == 4 && this.status == 200) {
		console.log(this.response);
	};
	console.log(this.readystate);
}

function parse () {
	request = new XMLHttpRequest();
	request.onreadystatechange = writeMessages;
	request.responseType = "json"
	request.open("get", "data.json", true);
	request.send();
}

