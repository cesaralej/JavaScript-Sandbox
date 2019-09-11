class UI {
    constructor(){
        this.commentSection = document.getElementById('comments')
    }
}

//Show comments
showRepos(comments) {
    let output = ''

    comments.forEach(comment => {
        output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${comment.html_url}" target="_blank">${comment.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${comment.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${comment.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${comment.forks_count}</span>
                    </div>
                </div>
            </div>
        `;

        //Output comments
        document.getElementById('comments').innerHTML = output;

    })
}