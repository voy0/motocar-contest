document.addEventListener("DOMContentLoaded", changeImg());

async function changeImg() {
    console.log(5);
    let i = 1;
    while (true) {
        await sleep(10000);
        document.body.style.backgroundImage = "url(img/" + i + ".jpg)";
        i++;
        i = i % 13 + 1;
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}