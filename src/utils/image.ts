export const existsImg = (src = ''): Promise<boolean> => {
  return new Promise(resolve => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(true)
    img.onerror = () => resolve(true)
  })
}
