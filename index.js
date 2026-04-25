let otterbutton = document.getElementById('otter-button');
let otterimage = document.getElementById('otter-image');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
otterbutton.onclick = async function(){
    otterimage.src = "Screenshot_2026-04-24_200232-removebg-preview.png";
    await sleep(1000);
    otterimage.src = "a9b8597c-07df-4004-a8ff-69c252ad236b-profile_image-70x70.png";
}