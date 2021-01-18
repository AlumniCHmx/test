let cajas = document.querySelectorAll('.blurred-box')
cajas.forEach(function (element) {
  element.setAttribute('onclick', 'print(this)')
})

// IPN
var areasArray = [
  `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmaAqEj5U9hQ_EBXLMiOMqj5x8dEUMja15LjtgHC7uKGWboQ/viewform?embedded=true" width="99%" height="${window.innerHeight - 25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`
  // `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDnff11bSGXlyciaznrmGKM0eU_L1uplk4DWVlsEfPumvksQ/viewform?embedded=true" width="99%" height="${window.innerHeight-25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`
]

function print (e) {
  document.getElementsByTagName('h1')[0].style.display = 'none'
  document.getElementById('navSection').style.display = 'none'
  let tipo = e.getAttribute('data-tipo')
  let area = e.getAttribute('data-area')

  document.getElementById('content').style.display = 'block'
  // var exam = `pdf/Examen UAM ${tipo}.pdf`
  let exam = `pdf/UNAM-${tipo}.pdf`
  PDFObject.embed(exam, '#example1')

  var formulario = document.getElementById('answers')
  formulario.innerHTML = areasArray[area - 1]

  // setting height of PDF
  document.getElementById('content').style.height = `${window.innerHeight - 25}px`
  // setting height of FORM
  // document.getElementById('doc').setAttribute("height",window.innerHeight);

  contador()
}

function contador () {
  let later = new Date()
  later.setHours(later.getHours() + 3)
  console.log(later)

  $('#clock').countdown(later, function (event) {
    $(this).html(event.strftime('%H:%M:%S'))
    })
}
