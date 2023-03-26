var video = document.querySelector("#your_vid");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function find_em(){
  document.getElementById('their_vid').style.display = "block";
  document.getElementById('dis_the_but').style.display = "none";
}
