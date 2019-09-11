class EasyHTTP {
    //Make an HTTP get request
    async get(url){
        const response = await fetch(url)
        const resData = await response.json()
        return resData
        
        /* return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        }) */
    }

    //POST REQUEST
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }

    //PUT REQUEST
    async put(url, data){
        
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
        
    }

    //DELETE REQUEST
    async delete(url){
       
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        const resData = await 'Resource Deleted'
        return resData
    }


}