let img_a = document.getElementById("img_a");
let img = document.getElementById("img");
let followers = document.getElementById("takipci");
let following = document.getElementById("following");
let public_repos = document.getElementById("public_repos");
let company = document.getElementById("company");
let location_user = document.getElementById("location_user");
let fullName = document.getElementById("fullName");
let bio = document.getElementById("bio");
let repoName = document.getElementById("repoName");
let repoStar = document.getElementById("repoStar");
let repoFork = document.getElementById("repoFork");
let gitusername = document.getElementById("githubname");
let search = document.getElementById("search");
let lastuser = document.getElementById("last-users");
let clearlastusers = document.getElementById("clear-last-users");

search.addEventListener("click", getuser, true);

clearlastusers.addEventListener("click", clearAll, true);

function getuser() {
    if (gitusername.value == "") {
        alert("zehmet olmasa heqqeten var olan user adi daxil edin");
    }
    else {
        let githubget = new GithubApi(gitusername.value);
        githubget.get();
        recentelement(gitusername.value);
        const myTimeout = setTimeout(localStorage_Github, 3000);
    }
    return gitusername.value = "";
}

function clearAll() {
    while (lastuser.firstElementChild !== null) {
        lastuser.firstElementChild.remove();
    }
}