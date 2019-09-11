const http = new EasyHTTP;

/*//Get post
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, post){
    if (err) {
        console.log(err)
    }else{
        console.log(post)
    }
})

 //Post post
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

http.post('https://jsonplaceholder.typicode.com/posts', data,
function(err, post) {
    if (err) {
        console.log(err)
    }else{
        console.log(post)
    }
})

http.put('https://jsonplaceholder.typicode.com/posts/1', data,
function(err, post) {
    if (err) {
        console.log(err)
    }else{
        console.log(post)
    }
}) 

http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response) {
    if (err) {
        console.log(err)
    }else{
        console.log(response)
    }
}) */

//ES6 Functions
//Get post
/* http.get('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log(data))
.catch(err => console.log(err)
) */

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@doe.com'
}

 //Post post
/* http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data=> console.log(data))
.catch(err => console.log(err)
)  */

/*  http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data=> console.log(data))
.catch(err => console.log(err)
) */

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data=> console.log(data))
.catch(err => console.log(err)
)

