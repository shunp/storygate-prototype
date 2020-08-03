export const toggleLoginModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.login-modal')
  modal!.classList.toggle('opacity-0')
  modal!.classList.toggle('pointer-events-none')
  body!.classList.toggle('modal-active')
}

export const toggleAccountApplicationModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.account-application-modal')
  modal!.classList.toggle('opacity-0')
  modal!.classList.toggle('pointer-events-none')
  body!.classList.toggle('modal-active')
}
