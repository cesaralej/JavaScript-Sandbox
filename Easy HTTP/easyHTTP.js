function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//Get
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true)
    //ES5 needs this little fix to work and pass in the context
    //Arrow functions fix this
    let self = this
    this.http.onload = function() {
        if(self.http.status === 200){
            return callback(null, self.http.responseText)
        } else {
            callback('Error: ' + self.http.status)
        }
    }
    this.http.send()
}

//Post
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('content-type', 'application/json')

    let self = this
    this.http.onload = function() {
        return callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

//Put
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('content-type', 'application/json')

    let self = this
    this.http.onload = function() {
        return callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

//Delete
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true)
    //ES5 needs this little fix to work and pass in the context
    //Arrow functions fix this
    let self = this
    this.http.onload = function() {
        if(self.http.status === 200){
            //return callback(null, self.http.responseText)
            return callback(null, 'Post deleted successfully')
        } else {
            callback('Error: ' + self.http.status)
        }
    }
    this.http.send()
}