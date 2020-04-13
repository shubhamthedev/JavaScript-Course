function easyHttp() {
    this.http = new XMLHttpRequest();
}

//Make an HTTP get request
easyHttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}
//Make an HTTP post request
easyHttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    //setting up the content type
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make an HTTP put request
easyHttp.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    //setting up the content type
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make an HTTP delete request
easyHttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}