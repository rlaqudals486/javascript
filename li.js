function over2(obj) {
    obj.src = "./images/중성마녀달리기.gif"
}

function out2(obj) {
    obj.src = "./images/makao.jpg"
}

var img4 = document.getElementById("img4");
// img4.addEventListener("mouseover", function() {
//     img4.src = " ./images/피카츄 뺨.gif"
// });

// img4.addEventListener("mouseout", function() {
//     img4.src = "./images/피이카추.jpg"
// });

var img5 = document.getElementById("img5")
img5.addEventListener("mouseover", function() {
    img5.src = " ./images/진화.gif"
});

img5.addEventListener("mouseout", function() {
    img5.src = "./images/블랙워그레이몬.jpg"
});

function over3(obj) {
    img4.src = " ./images/피카츄볼만지기.gif";
}

function out3(obj) { 
    img4.src = " ./images/피이카추.jpg";
}