const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downlodeBtn = document.getElementById("downlodeBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput()
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmptyInput()
});

downlodeBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");
    if(img !== null){
        let imgAttr = img.getAttribute("src");
        downlodeBtn.setAttribute("href",imgAttr);
    } else{
        downlodeBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});



function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Please enter text or URL to generate QR code. 🕵️‍♀️");
}

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#ffffff",
        colorDark: "#000000",
    });
}