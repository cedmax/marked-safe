function dataURItoBlob (dataURI) {
  const byteString = atob(dataURI.split(',')[1])
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: 'image/png' })
}

export default function PostImageToFacebook (authToken, imageData, callback) {
  let blob
  try {
    blob = dataURItoBlob(imageData)
  } catch (e) {
    console.log(e)
  }

  const fd = new FormData()
  fd.append('access_token', authToken)
  fd.append('source', blob)

  const request = new XMLHttpRequest()
  request.onload = function ajaxSuccess () {
    callback(JSON.parse(this.responseText))
  }
  request.open('POST', `https://graph.facebook.com/me/photos?access_token=${authToken}`)
  request.send(fd)
}
