 
// NOTE: couldn't store it in an array or object since i realized halfway through foreach doesn't work like that
const githubBtn = document.getElementById("githublinkID");
const youtubeBtn = document.getElementById("youtubelinkID");
const discordBtn = document.getElementById("discordlinkID");

// INFO: main social redirect buttons so the recruiter can see my achievements
githubBtn.onclick = function redirectGithub() {
    window.open("https://github.com/phenjects")
}

youtubeBtn.onclick = function redirectGithub() {
    window.open("https://www.youtube.com/@thejimmestjim")
}

discordBtn.onclick = function redirectGithub() {
    window.open("https://www.discord.com/users/1131924475173146765")
}
