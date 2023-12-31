var socket = io();
const SENT = 'SENT';
const RECEIVED = 'RECEIVED';

let username = "";
const btn = document.getElementById("join-chat");
const username_input = document.getElementById("usernameInput");
const form = document.getElementById("form");
const chatroomContainer = document.querySelector('.chatroom-container');
const messsagesContainer = document.querySelector('.messages');


const messageInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");


btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = username_input.value;
    if(username){
        console.log(username);
        form.style.display = "none";
        chatroomContainer.style.display ="block";
    }
});

sendBtn.addEventListener('click', (e) => {
    e.preventDefault;
    let data = {
        id: socket.id,
        username: username,
        message: messageInput.value
    };
    socket.emit('echo123',data);
    renderMessage(data, SENT);
});


socket.on('echo123', (data) =>{
    if(data.id !== socket.id){
        renderMessage(data, RECEIVED);
    }
});

function renderMessage(data, messageType) {
    const msgDiv = document.createElement("div");
    msgDiv.innerText = `${data.username} : ${data.message}`;
    if(messageType === SENT){
        msgDiv.setAttribute('class', 'message sent');
    }else{
        msgDiv.setAttribute('class', 'message');

    }
    messsagesContainer.appendChild(msgDiv);
    messageInput.value = ' ';
}