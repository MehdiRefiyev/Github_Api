class GithubApi{
    constructor(name){
        this.name = name;
    }
    async get(){
        const reponse = await fetch("https://api.github.com/users/" + this.name);

        if(reponse.status === 200 ){
            
            const data = await reponse.json();

            let ui = new Ui(data.login , data.avatar_url , data.followers , data.following , data.public_repos , data.login , data.location , data.name , data.bio , data.repos_url);

            ui.siteView();

        }
        else{
            console.log("error: github profile not found");
            alert("error: github profile not found");
        }
    }
}