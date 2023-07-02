class Ui {
    constructor(link , img , followers , following , public_repos , company , location , name , bio , repos_url ){
        this.link = link;
        this.img = img;
        this.followers = followers;
        this.following = following;
        this.public_repos = public_repos;
        this.company = company;
        this.location = location;
        this.name = name;
        this.bio = bio;
        this.repos_url = repos_url;
    }
    async siteView(){
        img_a.href = "https://github.com/" + this.link;
        
        img.src = this.img;

        followers.innerHTML = this.followers;

        following.innerHTML = this.following;

        public_repos.innerHTML = this.public_repos;

        company.innerHTML = this.company;

        location_user.innerHTML = this.location;

        fullName.innerHTML = "tam adi : " + this.name;

        bio.innerHTML = "bio : " + this.bio;

        const reponse = await fetch (this.repos_url);

        const datarepos = await reponse.json()

        repoName.href = datarepos[0].html_url;

        repoStar.innerHTML = datarepos[0].stargazers_count

        repoFork.innerHTML = datarepos[0].forks_count;
    }
}
function recentelement(name){
    let recenname  = document.createElement("li");
    recenname.className = "list-group-item";
    let recenvalue = document.createTextNode(name);
    recenname.appendChild(recenvalue);
    lastuser.prepend(recenname);
}