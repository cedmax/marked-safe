export default function (url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = function () {
    const reader = new FileReader()
    reader.onloadend = function () {
      callback(reader.result)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()
}
