document.getElementById("input").addEventListener("change", function(event){
  console.log(event);
  loadexcercise(event.target.value);
})

function loadexcercise(name) {
  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + name, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "WElfGh8g1VmbA07Wnmfmkw==G7d4I66mirlJQxph"
      }
  })
  .then(response => response.json())
  .then(data => showexcercise(data))
  .catch(err => console.error(err));
}

function showexcercise(data) {
  let html = "";
  data.forEach(element => {
      html += "<li onClick='getanimalinfo(\""+ element.name + "\")'>" + element.name + "</li>";
      html += "<div>" + element.type + "</div>";
      html += "<div>" + element.muscle + "</div>";
      html += "<div>" + element.equipment + "</div>";
      html += "<div>" + element.difficulty + "</div>";
  });

  document.getElementById("list").innerHTML = html;
}

