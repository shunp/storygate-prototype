export const existImg = (src = '') => {
  const img = new Image()
  img.src = src
  return img.height
}
