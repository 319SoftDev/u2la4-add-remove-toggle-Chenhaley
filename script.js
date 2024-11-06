const heading = document.querySelector("#heading");
const subHeading = document.querySelector("#subheading");
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message")

const changeFontColor = () => {
    heading.classList.toggle("blue-text");
   
}

const subHeadingFont = () => {
    subHeading.classList.toggle("blue-text");
}

const changeReply = () => {
    replyMessage.classList.toggle("hidden");
}

const sendMessage = document.querySelector("#send-button");
const cancelMessage = document.querySelector("#cancel-button");

const sent = () => {
    replyMessage.classList.add("hidden");
}

const cancel = () => {
    replyMessage.classList.add("hidden");
}

heading.addEventListener("click" , changeFontColor);
subHeading.addEventListener("click" , subHeadingFont);
replyButton.addEventListener("click", changeReply);

//send
sendMessage.addEventListener("click", sent);
cancelMessage.addEventListener("click", sent);
