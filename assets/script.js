const windows = document.querySelector(".windows");
const ubuntu = document.querySelector(".ubuntu");
const redhat = document.querySelector(".redhat");
const apple = document.querySelector(".apple");

windows.addEventListener("click", function () {
    const windowsContent = document.querySelector(".windows-content");
    const ubuntuContent = document.querySelector(".ubuntu-content");
    const redhatContent = document.querySelector(".redhat-content");
    const appleContent = document.querySelector(".apple-content");
    if (windowsContent.style.display === "none") {
        windowsContent.style.display = "block";
        ubuntuContent.style.display = "none";
        redhatContent.style.display = "none";
        appleContent.style.display = "none";
    }
    else {
        windowsContent.style.display = "none";
    }
})
ubuntu.addEventListener("click", function () {
    const ubuntuContent = document.querySelector(".ubuntu-content");
    const windowsContent = document.querySelector(".windows-content");
    const redhatContent = document.querySelector(".redhat-content");
    const appleContent = document.querySelector(".apple-content");
    if (ubuntuContent.style.display === "none") {
        ubuntuContent.style.display = "block";
        redhatContent.style.display = "none";
        appleContent.style.display = "none";
        windowsContent.style.display = "none";
    }
    else {
        ubuntuContent.style.display = "none";
    }
})
redhat.addEventListener("click", function () {
    const redhatContent = document.querySelector(".redhat-content");
    const ubuntuContent = document.querySelector(".ubuntu-content");
    const windowsContent = document.querySelector(".windows-content");
    const appleContent = document.querySelector(".apple-content");
    if (redhatContent.style.display === "none") {
        redhatContent.style.display = "block";
        ubuntuContent.style.display = "none";
        appleContent.style.display = "none";
        windowsContent.style.display = "none";
    } else {
        redhatContent.style.display = "none";
    }
})
apple.addEventListener("click", function () {
    const appleContent = document.querySelector(".apple-content");
    const redhatContent = document.querySelector(".redhat-content");
    const ubuntuContent = document.querySelector(".ubuntu-content");
    const windowsContent = document.querySelector(".windows-content");
    if (appleContent.style.display === "none") {
        appleContent.style.display = "block";
        redhatContent.style.display = "none";
        ubuntuContent.style.display = "none";
        windowsContent.style.display = "none";
    } else {
        appleContent.style.display = "none";
    }
})
