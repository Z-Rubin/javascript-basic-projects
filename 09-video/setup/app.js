// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const videoContainer = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function (){
    preloader.classList.add("hide-preloader");
});
btn.addEventListener("click", function(){
    if (btn.classList.contains("slide")){
        btn.classList.remove("slide");
        videoContainer.play();
    } else{
        btn.classList.add("slide");
        videoContainer.pause();
    }
});
