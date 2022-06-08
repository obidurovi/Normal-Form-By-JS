const fName = document.querySelector('.fName');
const input1 = document.getElementById('input1');
const icon1 = document.getElementById('icon1');
const tw = document.querySelector('.tol-wrapper');
const lName = document.querySelector('.lName');
const input2 = document.getElementById('input2');
const icon2 = document.getElementById('icon2');
const tw2 = document.querySelector('.tol-wrapper2');


let count = 0;
// First Name
input1.onblur = () => {
    if (input1.value == '') {
        input1.style.borderColor = 'red';
        icon1.style.display = 'block';
    } else {
        input1.style.borderColor = 'black';
        icon1.style.display = 'none';
    }

    count ++;
}

input1.onfocus = () => {
    input1.style.borderColor = 'black';
    icon1.style.display = 'none';


    if (input1.value == '' && count > 0) {
        tw.style.display = 'block';
    }else {
        tw.style.display = 'none';
    }
}



// Last Name

let count2 = 0;
input2.onblur = () => {
    if (input2.value == '') {
        input2.style.borderColor = 'red';
        icon2.style.display = 'block';
    } else {
        input2.style.borderColor = 'black';
        icon2.style.display = 'none';
    }
    count2 ++;
}

input2.onfocus = () => {
    input2.style.borderColor = 'black';
    icon2.style.display = 'none';


    if (input2.value == '' && count2 > 0) {
        tw2.style.display = 'block';
    }else {
        tw2.style.display = 'none';
    }
}