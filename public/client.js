async function users() {

  (async () => {
    let req = await fetch('http://localhost:3000/users', {
        headers: {"Authorization": "Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_"}
    });
    let res = await req.json();

    console.log(res);

    var table = document.getElementById('userdata');

    res.forEach(function(object) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + object.id + '</td>' +
        '<td>' + object.firstName + '</td>' +
        '<td>' + object.lastName + '</td>' +
        '<td>' + object.email + '</td>';
      
      table.appendChild(tr);
    });

})()

}

async function orders() {

  (async () => {
    let req = await fetch('http://localhost:3000/orders', {
        headers: {"Authorization": "Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_"}
    });
    let res = await req.json();

    console.log(res);

    var table = document.getElementById('orderdata');

    res.forEach(function(object) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + object.price + '</td>' +
        '<td>' + object.product + '</td>' +
        '<td>' + object.status + '</td>' +
        '<td>' + object.userId + '</td>';
      
      table.appendChild(tr);
    });

})()

}

async function jane() {

  (async () => {
    let req = await fetch('http://localhost:3000/orders', {
        headers: {"Authorization": "Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_"}
    });
    let res = await req.json();

    let users = await fetch('http://localhost:3000/users', {
        headers: {"Authorization": "Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_"}
    });

    let userresult = await users.json();

    var jane = "0";


    userresult.forEach(function(object) {
      if(object.firstName === "Jane" && object.lastName === "Doe"){
        jane = object.id;
      }
    });

    var table = document.getElementById('janedata');

    res.forEach(function(object) {

      if ( object.userId === jane){
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.price + '</td>' +
          '<td>' + object.product + '</td>' +
          '<td>' + object.status + '</td>' +
          '<td>' + object.userId + '</td>';
        
        table.appendChild(tr);
      }

    });

})()

}