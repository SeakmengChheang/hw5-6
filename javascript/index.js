var movies = [
    "0-Doctor Strange", "1-Rampage", "2-Blade Runner 2049", "3-Moon Light",
    "4-Star Wars: The Last Jedi", "5-Star Wars: Rouge One",
    "6-Deepwater Horizon", "7-Replicas", "8-The King's Man",
    "9-Radio Flash", "10-Avatar", "11-Aladdin", "12-Jumanji: The Next Level",
    "13-Transformers: Dark of The Moon", "14-Avenger Panda"
];

for (let movie in movies)
    console.log(movie + ": " + movies[movie]);

function getCountDown(end) {
    let a = new Object();

    let now = new Date().getTime();
    let countdown = (end - now) / 1000;

    a['day'] = parseInt(countdown / (60 * 60 * 24));
    a['hour'] = parseInt(countdown % (60 * 60 * 24) / (60 * 60));
    a['mn'] = parseInt(countdown % (60 * 60) / 60);
    a['sec'] = parseInt(countdown % 60);

    return a;
}

function setCountDown() {
    let cm = getCountDown(new Date("Dec 25, 2019 00:00:00").getTime());
    let cd = getCountDown(new Date("Jan 1, 2020 00:00:00").getTime());

    document.getElementById("to_christmas").textContent = cm['day'] + " days " +
        cm['hour'] + " hours " + cm['mn'] + " minutes " + cm['sec'] + " seconds";
    document.getElementById("to_countdown").textContent = cd['day'] + " days " +
        cd['hour'] + " hours " + cd['mn'] + " minutes " + cd['sec'] + " seconds";
}

function loaded() {
    setInterval(setCountDown, 1000);
    setInterval(updateDate, 1000);
}

function updateDate() {
    let smalls = document.getElementsByClassName('date');
    for(let small of smalls) {
        small.textContent = new Date().toDateString() + " " + new Date().toLocaleTimeString();
    }
}

function calAge() {
    let bd = new Date(document.getElementById('bd').value);
    let now = new Date();
    let year = now.getFullYear() - bd.getFullYear();
    let month = now.getMonth() - bd.getMonth();
    let day = now.getDate() - bd.getDate();

    let out = document.getElementById('age-result');
    out.textContent = "You're " + year + " years old " + month + " months and " + day + " days.";
}

function add_movies(div_ind, numbers) {
    if (div_ind != 0 && div_ind != 1)
        return;

    let movie_con = document.getElementsByClassName("movie-container")[div_ind];
    for (let i = 0; i < numbers; ++i) {
        let div = document.createElement("div");
        div.className = (div_ind == 1 ? "aside-" : "") + "movie";

        let rand = parseInt(Math.random() * 15);
        let index = movies[rand].split('-')[0];
        let title = movies[rand].split('-')[1];
        div.innerHTML = "<a href='#'><div class='img-hover-zoom'><img src='images/m-" + index + ".jpg' /></div></a>\n<p>" + title + "</p><small class='date'></small>";

        movie_con.appendChild(div);
    }
}