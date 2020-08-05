export const togglePostModal = (id: string) => {
  const queryTarget = `.post-modal-${id}`
  const body = document.querySelector('body')
  const modal = document.querySelector(queryTarget)
  modal!.classList.toggle('opacity-0')
  modal!.classList.toggle('pointer-events-none')
  body!.classList.toggle('modal-active')
}
