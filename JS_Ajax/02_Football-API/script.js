let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams"

fetch("https://api.football-data.org/v2/competitions/2002/teams", {
    method:"GET",

    headers: {
        "x-auth-token": "61c6cc828ee74aaaae5636acefc6af9a"
    }
})
.then(response => response.json())
.then(function (data) {
    let html="";
    data.teams.forEach(element => {
        html += "<li><img src='" + element.crestUrl + "'/>" + element.name + "</li>";
    })
    document.getElementById("teams").innerHTML = html;
});