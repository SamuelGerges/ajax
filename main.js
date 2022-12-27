
var roleSelected = document.querySelector('select[name=roles]');
var citySelected = document.querySelector('select[name=city]');

// console.log(roleSelected);
var req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if(req.readyState == req.DONE && req.status == 200){
        if(req.response != ''){
            roles = JSON.parse(req.response);
            for(var i=0;i<roles.length;i++){
                // console.log(roles[i]);
                roleSelected.add(new Option(roles[i].name,roles[i].id))
            }
        }
    }
}
req.open('GET','http://ajax-test.test/role.php');
req.send();


req.onreadystatechange = function(){
    if(req.readyState == req.DONE && req.status == 200){
        if(req.response != ''){
            cities = JSON.parse(req.response);
            for(var i=0;i<cities.length;i++){
                // console.log(roles[i]);
                citySelected.add(new Option(cities[i].name,cities[i].id))
            }
        }
    }
}
req.open('GET','http://ajax-test.test/cities.php');
req.send();