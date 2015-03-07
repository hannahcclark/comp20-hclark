function writeMessages () {
	if (this.readystate == 4 && this.response.status == 200) {
		console.log(this.responseText);
	};
}

function parse () {
	request = new XMLHttpRequest();
	request.onreadystatechange = writeMessages;
	request.responseType = "json"
	request.open("get", "messages.json", true);
	request.send();
}

