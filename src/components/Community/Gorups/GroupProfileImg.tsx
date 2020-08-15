import * as React from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const GroupProfileImg = ({ profileImg, setProfileImg }) => {
  const [upImg, setUpImg] = React.useState()
  const imgRef = React.useRef(null)
  const [crop, setCrop] = React.useState({ unit: '%', width: 30, aspect: 1 / 1, minWidth: 20, minHeight: 20 })
  const [previewUrl, setPreviewUrl] = React.useState<string>()

  const onLoad = React.useCallback(img => {
    imgRef.current = img
  }, [])

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height)

    return new Promise((resolve, reject) => {
      canvas.toBlob(b => {
        if (!b) {
          reject(new Error('Canvas is empty'))
          return
        }
        b.name = fileName
        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(previewUrl)
          setPreviewUrl(window.URL.createObjectURL(b))
          setProfileImg(b)
        }
      }, 'image/jpeg')
    })
  }

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, 'newFile.jpeg')
    }
  }

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setUpImg(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <ReactCrop src={upImg} onImageLoaded={onLoad} crop={crop} onChange={setCrop} onComplete={makeClientCrop} />
        <div className="flex items-center justify-center bg-grey-lighter ">
          <div className="p-1 w-32 flex flex-col items-center border-2 bordeer-gray-300 focus:outline-none bg-white rounded-lg">
            <span className="text-primary leading-normal text-xs">Upload Image</span>
            <input type="file" className="hidden" onChange={onSelectFile} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupProfileImg
