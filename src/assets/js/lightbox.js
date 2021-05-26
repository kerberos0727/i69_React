const gallery = (ele)=>{
    img  = document.querySelector('#gal-img')
    canvas  = document.querySelector('#lightbox')
    img.src = ele.src
    canvas.style.display="flex"
}
const close_gallery=()=>{
    canvas.style.display="none"
}