const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if (id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const elemement = document.getElementById(id);
        elemement.classList.add("active");
    }

});