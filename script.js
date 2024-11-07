const heading = document.querySelector("#heading");
const subHeading = document.querySelector("#subheading");
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message")
const openButton = document.querySelector("#open-button");
const inboxButton = document.querySelector("#inbox-message");
const markButton = document.querySelector("#mark-button");
const inbook = document.querySelector("#inbox");
//X
const MrX = document.querySelector("#close");

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

const inbuck = () => {
    inboxButton.classList.toggle("hidden");
    inbook.classList.add("is-read");
    markButton.classList.remove("hidden");

}

const vanish = () => {
    inboxButton.classList.add("hidden");
}
//mark as unread
//////////Button disappears REMINDER
const unmark = () => {
    inbook.classList.remove("is-read");
}

heading.addEventListener("click" , changeFontColor);
subHeading.addEventListener("click" , subHeadingFont);
replyButton.addEventListener("click", changeReply);

//send
sendMessage.addEventListener("click", sent);
cancelMessage.addEventListener("click", sent);
//open
openButton.addEventListener("click", inbuck);

MrX.addEventListener("click", vanish);
markButton.addEventListener("click", unmark);
// markButton.addEventListener("click", inbuck);
