const targetedElement = document.querySelectorAll('li');
const hideBtn = document.querySelector(".x");
const coverContainer = document.querySelector(".cover");
[...targetedElement].forEach(v=>{
    v.addEventListener('click', function(e){
    const colorName = e.target.getAttribute('b')
    console.log(colorName);
    document.querySelector("h1").style.color = colorName;
    })
})

hideBtn.addEventListener('click', function(e){
    coverContainer.classList.toggle("animated-hide")
})