var btn = document.getElementById("getUsers");
var userContainerElM = document.getElementById("user_container");
var menu = document.getElementById('dgetUsers');
var usersList = document.getElementById('userslist');

btn.addEventListener("click", requestUsers,false);
menu.addEventListener('change',function(){
    requestUsers(this.value);
},false);

function requestUsers(numberOfUsers){
    //xmlHttpRequest Api
    var req = new XMLHttpRequest();
    var url = "https://randomuser.me/api/?results=" +((typeof numberOfUsers == 'object') ? 5 : numberOfUsers);
    req.onprogress = function(){
        userContainerElM.innerHTML = "Fetching User .......";
    }
    ;
    req.onreadystatechange = function () {
      if (req.readyState === req.DONE) {
        // var userContainerHtml = "";
        var results = JSON.parse(req.response);
        usersList.options.length = 0;
        for (let i = 0; i < results.results.length; i++) {
        //   userContainerHtml +=
        //             '<div class="users" id="users">' +
        //                 "<h3>User: "+(i+1)+"</h3>" +
        //                 "<p>Name: <span>"+results.results[i].name.first +" "+results.results[i].name.last+"</span></p>" +
        //                 "<p>Gender: <span>"+ results.results[i].gender +"</span></p>" +
        //                 "<p>Address: <span>"+results.results[i].location.city+"</span></p>" +
        //             "</div>";

        var v = i+1;
        usersList.add(new Option(results.results[i].name.first +" "+results.results[i].name.last,v));
        }
        // userContainerElM.innerHTML = userContainerHtml;
      }
    };

    req.onerror = function () {
      console.log(
        new Error("Sorry the request was not completed successfully")
      );
    };

    req.open("GET", url);
    // readyState

    req.send();

}
