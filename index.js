function opennav() {
    var x = document.getElementById('navbar');
    if (x.className == 'navbar') {
        x.className += ' responsive';
    } else {
        x.className = 'navbar';
    }
}


var date = new Date();
var year = date.getFullYear();

document.getElementById('date').textContent = year;

// var phone = document.querySelector('#contact').value;

// var regex = /\d{5}([- ]*)\d{6}/;

// if (!regex.test(phone)) {
//     document.getElementById('#contact-span').style.display = 'block';
// }

function table() {
    document.getElementById('medicinetable-container').style.width = '100%';
}


function closebtn() {
    document.getElementById('medicinetable-container').style.width = '0%';
}