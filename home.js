var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.log("Something went wrong!");
        });
}

function openPanel() {
    document.getElementById("sidepanel").style.width = "250px";
}
  
function closePanel() {
    document.getElementById("sidepanel").style.width = "0";
}

// function togglePanel() {}