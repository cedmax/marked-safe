import html2canvas from 'html2canvas'

export default function save () {
  html2canvas(document.getElementById('result')).then((canvas) => {
    canvas.id = 'remove'
    document.body.appendChild(canvas)
    const link = document.createElement('a')
    link.download = 'marked-safe.jpg'
    link.href = canvas.toDataURL('image/jpeg')
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    document.getElementById('remove').remove()
  })
}
