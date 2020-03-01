'use strict';

var pg = require('pg');

let uName = document.getElementById('uName');
let pwd = document.getElementById('pwd');

function checkCred() {
    if(uName.value == "name" && pwd.value == "password") {
        alert("Come in!");
    }
    else {
        alert("If you're not on the list, you're not coming in");
    }
}
