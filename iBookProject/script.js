function changeColorfocus(i){   // when enter the text fields to write any content it will change to yellow color
    document.getElementById(i).style.backgroundColor="#fdffb6"; // chnage the backgrondcolor to yellow
}

function changeColorblur(i){  // when we unfocus any ext fields it will be back to default white color
    document.getElementById(i).style.backgroundColor="white";// chnage the backgrondcolor to white
}
function login (){  // this will show up the login box in the home page when we enter the login button
    document.getElementById("popup").style.display="flex";// this make the display of the box be shown 
}
function close1 (){ // this will shut off the login box in the home page when we enter the x sign
    document.getElementById("popup").style.display="none"; //this make the display of the box be dispeare
}

function signup (){ 
    close1(); // this will shut off the login box in the home page when we enter the x sign
    document.getElementById("popup1").style.display="flex";//this make the display of the box be dispeare
}
function close2 (){
    document.getElementById("popup1").style.display="none"; //this make the display of the box be dispeare
}
function remember(){ // this function is for save the login information of user to the websit so when he come back again will never write the information login again
    if (localStorage.getItem("username")==null || localStorage.getItem("password")==null){// to check if the user never write his informatin previsoly
       var username= document.getElementById("username").value;// save the user name in local storage
        localStorage.setItem("username",username); // to save to the website
        var pass = document.getElementById("password").value; // save the passowrd in local storage
        localStorage.setItem("password",pass); // to save to the website
    } 
}
function load (){  //when the user reloud the page these information will sit
var lousername = localStorage.getItem("username"); // if the user already set user name we will resign it variable
var loPass = localStorage.getItem("password"); // if the user already set email we will resign it variable
document.getElementById("username").value=lousername; // put value of the storage that we already saveit to the text field
document.getElementById("password").value=loPass; // put value of the storage that we already saveit to the text field
}


