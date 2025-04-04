(function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML =
        `.pi_chat_button{position:fixed;bottom:20px;right:20px;height:60px;width:60px;z-index:99999;border-radius:50%;border:none;background-color:#14328c;color:#fff;cursor:pointer;transition:transform .3s,right .3s}.pi_chat_button.open{right:-200px}.pi_chat_iframe{position:fixed;bottom:10px;right:20px;width:450px;height:0;border:none;z-index:99998;transition:height .3s;max-width:100%;max-height:100%}.pi_chat_iframe.open{height:600px}@media (max-width:768px){.pi_chat_button{height:50px;width:50px}.pi_chat_iframe.open{height:100vh;width:100%;right:0;bottom:0}}`;
    styleTag.type = "text/css";

    const svgIcon = `
        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    `;

    var chatButton = document.createElement("button");
    chatButton.innerHTML = svgIcon;
    chatButton.classList.add("pi_chat_button"); // Add the CSS class for button

    var chatIframe = document.createElement("iframe");
    chatIframe.src = "http://localhost:5173";
    chatIframe.classList.add("pi_chat_iframe");

    console.log({ styleTag });
    document.head.appendChild(styleTag);
    document.body.appendChild(chatButton);
    document.body.appendChild(chatIframe);

    var open = false;
    const closeWidget = () => {
        open = !open;
        chatButton.classList.toggle("open");
        chatIframe.classList.toggle("open");
    };
    chatButton.addEventListener("click", closeWidget);

    window.addEventListener("message", function (event) {
        if (event.origin === "http://localhost:5173") {
            if (event.data === "closeWidget") {
                closeWidget();
            }
        }
    });
    console.log('PI Chat: embedded successfully');
})();