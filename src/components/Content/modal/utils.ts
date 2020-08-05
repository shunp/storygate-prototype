export const togglePostModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.post-modal')
  modal!.classList.toggle('opacity-0')
  modal!.classList.toggle('pointer-events-none')
  body!.classList.toggle('modal-active')
}
