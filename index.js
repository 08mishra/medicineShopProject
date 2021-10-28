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

function table1() {
    document.getElementById('medicinetable-container1').style.width = '100%';
}


function closebtn1() {
    document.getElementById('medicinetable-container1').style.width = '0%';
}




function table2() {
    document.getElementById('medicinetable-container2').style.width = '100%';
}


function closebtn2() {
    document.getElementById('medicinetable-container2').style.width = '0%';
}




function table3() {
    document.getElementById('medicinetable-container3').style.width = '100%';
}


function closebtn3() {
    document.getElementById('medicinetable-container3').style.width = '0%';
}



function table4() {
    document.getElementById('medicinetable-container4').style.width = '100%';
}


function closebtn4() {
    document.getElementById('medicinetable-container4').style.width = '0%';
}



function table5() {
    document.getElementById('medicinetable-container5').style.width = '100%';
}


function closebtn5() {
    document.getElementById('medicinetable-container5').style.width = '0%';
}




function table6() {
    document.getElementById('medicinetable-container6').style.width = '100%';
}


function closebtn6() {
    document.getElementById('medicinetable-container6').style.width = '0%';
}