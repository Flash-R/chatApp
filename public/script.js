var socket = io();

let username = "";
const btn = document.getElementById("join-chat");
const username_input = document.getElementById("usernameInput");
const form = document.getElementById("form");
const chatroomContainer = document.querySelector('.chatroom-container');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = username_input.value;
    if(username){
        console.log(username);
        form.style.display = "none";
        chatroomContainer.style.display ="block";
    }
});