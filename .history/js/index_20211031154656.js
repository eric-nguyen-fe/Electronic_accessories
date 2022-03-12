let slide_index = 0
let silde_play = true
let slides =document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e =>{
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
prevSilde = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

showSlide()

setInterval(() =>{
    if(!silde_play) return
    nextSlide()
    showSlide()
}, 3000)