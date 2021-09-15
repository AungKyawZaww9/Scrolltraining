// UI

// Start Mission  
const head = document.querySelector('h1');
const lorem = document.querySelector('p');
const link = document.querySelector('.link');




window.addEventListener('scroll',()=>{
    // console.log("hey");

    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 150){
        head.classList.add('slide');
        lorem.classList.add('slide');
        link.classList.add('slide');
    }else{
        head.classList.remove('slide');
        lorem.classList.remove('slide');
        link.classList.remove('slide');
    }
});

// End Mission  





// Start Login Form 
const labels = document.querySelectorAll('.formgroup label');
const map = document.querySelector('.map');
const text = document.querySelector('.text');




labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // console.log(label.innerText.split(""));

    // label.innerHTML = "one";
    label.innerHTML = label.innerText.split('').map((letter,index)=> `<span style="transition-delay:${index*50}ms":>${letter}</span>`).join('');

});





function showmap(input){
    // console.log(input);

    const innerheight = window.innerHeight ;
    // console.log(innerheight);

    const boxtop = input.getBoundingClientRect().top;
    // console.log(boxtop);

    if(boxtop < innerheight){
        input.classList.add('show');
    }else{
        input.classList.remove('show');
    }



}
// showmap();



window.addEventListener('scroll',()=>{
    showmap(map);
});



window.addEventListener('scroll',()=>{
    showmap(text);
})



// Start Check Form input
const nameel = document.getElementById('name'),
        emailel = document.getElementById('email'),
        passwordel = document.getElementById('password');

const confirmbtn = document.querySelector('.confirmbtn');





function showerrorel(input,message){
    let formgroup = input.parentElement;
    formgroup.className = "formgroup showerror";
    // console.log(formgroup);

    let small = formgroup.querySelector('small');
    small.innerText = message;
    // console.log(small);
}
// showerrorel(nameel,"Please Fill Correct");




function showsuccessel(input){
    let formgroup = input.parentElement;
    formgroup.className = "formgroup showsuccess";
    // console.log(formgroup);
}
// showsuccessel(nameel);




//checkingarr function they are put in the array
function checking(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach((inputarr)=>{
        // console.log(inputarr);

        if(inputarr.value == ""){
            showerrorel(inputarr,`${getfiled(inputarr)} is required!`);
        }else{
            showsuccessel(inputarr);
        }
    });
}




// getfiled function => to big size start words and get all words 
function getfiled(inputarr){
     return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
// getfiled(nameel)





//checkname function => to check the name => show success and show error
function checkname(input,min,max){
    // console.log(input);
    if(input.value.length == ""){
        showerrorel(input,`${getfiled(input)} is required!`);
    }else if(input.value.length < min){
        showerrorel(input,`${getfiled(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerrorel(input,`${getfiled(input)} must be at most ${max} characters`);
    }else{
        showsuccessel(input);
    }
   
}




//checkname function => to check the password => show success and show error
function checkpassword(input,min,max){
    // console.log(input);
    // console.log(input.value.length);

    if(input.value.length == ""){
        showerrorel(input,`${getfiled(input)} is required!`);
    }else if(input.value.length < min){
        showerrorel(input,`${getfiled(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerrorel(input,`${getfiled(input)} must be ${max} characters`);
    }else{
        showsuccessel(input);
    }
}




// validateEmail => form stackoverflow => to check email valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





//checkname function => to check the email => show success and show error =>combined stackoverflow 
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(input.value.length == ""){
        showerrorel(input, `${getfiled(input)} is required!`);
    }else if(re.test(input.value)){
        showsuccessel(input);
    }else{
        showerrorel(input,`${getfiled(input)} isn't valid`);
    }
}





//Event Listener
confirmbtn.addEventListener('click',()=>{
    // console.log("hey");

    checking([nameel,emailel,passwordel]);
    checkname(nameel,3,15);
    checkpassword(passwordel,5,15);
    checkemail(emailel);


});
// End Check Form input



// End Login Form 
