const box = document.querySelector('.box')

if (box) {
  box.addEventListener('click', (evt) => {
    evt.preventDefault()
    box.remove()
  })
}
