fetch("http://localhost:3000/schedules")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.map()
    });

function participants(array) {
    var name = [array.name];
    var date = [array.date];
    var from = [array.from];
    var destination = [array.destination];
    var ferry_name = [array.ferry_name];

    var showParticipants = document.getElementById("container-card").innerHTML = document.getElementById("container-card").innerHTML +
        `<div class='col-3'> <div class='card' style='width: 18rem;'> <div class='card-body'> <p>${name}</p> <p>${date}</p> <p>${from}</p>
    <p>${destination}</p> <p>${ferry_name}</p> </div> </div> </div>`
}