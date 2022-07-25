// nav pageYOffset setting
let headerXl = document.querySelector('.nav');
window.addEventListener("scroll",()=>{
    if(window.pageYOffset !=0){
        headerXl.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    else{
        headerXl.style = "";
    }
});
let headerSm = document.querySelector('.header-navbar');
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 60){
        headerSm.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    else{
        headerSm.style = "";
    }
});
// nav pageYOffset setting

// top tag pageYOffset setting
let topTag = document.querySelector('.bktotop');
window.addEventListener("scroll",()=>{
    if(window.pageYOffset != 0){
        topTag.style = "";
    }
    else{
        topTag.style.display = 'none';
    }
})
// top tag pageYOffset setting

