
function registerEvents(){
    document.getElementById("loadToDos").addEventListener("click",function(){
        loadToDos();
    })
    document.getElementById("loadUser").addEventListener("click",function(){
        loadUser();
    })
}

function loadToDos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let html = "";
    data.forEach(todo => {
        html += "<li>" + todo.title + "</li>";
        
    });
    DocumentTimeline.getElementById("list").innerHTML = html;

    console.log(todo.title);
  })
  .catch(function (err) {
    console.log(err);
  });
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let html = "";
    data.forEach(user => {
        html += "<li>" + user.name + "</li>";
        
    });
    DocumentTimeline.getElementById("list").innerHTML = html;

    console.log(todo.title);
  })
  .catch(function (err) {
    console.log(err);
  });
}

registerEvents();