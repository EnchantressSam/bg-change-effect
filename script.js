let ImgBox = document.querySelector('.img-box')
let ImgWrap = document.querySelector('.img-wrap')
let bgImg = document.getElementById('bgImg')
let line = document.getElementById('line')
bgImg.style.width = ImgBox.offsetWidth + 'px'
let leftSpace = ImgBox.offsetLeft

ImgBox.onmousemove = function(e){
  // e.pageX
  let boxWidth =  (e.pageX-leftSpace) + 'px'
  ImgWrap.style.width = boxWidth
  line.style.left = boxWidth
}

