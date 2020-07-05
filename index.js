var cajas=document.querySelectorAll('.blurred-box');
cajas.forEach(function(element) {
    element.setAttribute('onclick','print(this)')
});

/* //UAM
var areasArray=[
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSfcD4QbQJF8N9RWkSFfYkmQL09JHAxR60-YnqgZ0VVoGLktgw/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSduacefR3VnaNRTTET9Adu_wZ9Khg-ydAzLGzzLuvP0aa6iVA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSeaU0UOnJfK79ZfyhUCUR_xCxxGzLKHXX_miuevDqr5_WMrvw/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSeGIdzumInqd_IRKRxu4ZO030rR8xeMPKHex6KU3T8xhJX0GA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>'
]
*/

/*
//UNAM
var areasArray=[
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSfu6VPx8GlRE5KV39Fv67FnTIUOnrKjFU1rPme4-qNlqt7qvA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSe-7qrw687ZxFpsQtS-Q4icpGpDvUfAvfgScjQuv9kUvy2awQ/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSe-i5Ii2YcLp7zrUqzAFDD6xb8n8Pup3_qJFnF_LC44oAqpFQ/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSfa49RgA4SJThYJKj8dhMeIJhxyujMoQHi7YXJ2skZCL0InzQ/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>'
]*/

//IPN
var areasArray = [
 `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdq6QfoAEtsWx-yb5N6IpfwSM2dosh79LR76b-1Z8JIgTSjfw/viewform?embedded=true" width="99%" height="${window.innerHeight-25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
 `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQO_hZtnJkrCUIKoihhDjpH61GL1LEn-Yl7HXnlukEOIf6hg/viewform?embedded=true" width="99%" height="${window.innerHeight-25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
 `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxvx4JNdBT1dOTdik6_0vG1RJnQAkNjpB7o7KgvLWanj2uhA/viewform?embedded=true" width="99%" height="${window.innerHeight-25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`   
]

function print(e){
    document.getElementsByTagName('h1')[0].style.display='none'
    document.getElementById("navSection").style.display='none'
    var tipo =e.getAttribute('data-tipo')
    var area =e.getAttribute('data-area')
    
    document.getElementById("content").style.display='block'
    //var exam = `pdf/Examen UAM ${tipo}.pdf`
    var exam = `pdf/IPN-${tipo}.pdf`
    PDFObject.embed(exam, "#example1");
    
    var formulario = document.getElementById("answers")
    formulario.innerHTML=areasArray[area-1]

    //setting height of PDF
    document.getElementById("content").style.height=`${window.innerHeight-25}px`
    // setting height of FORM
    //document.getElementById('doc').setAttribute("height",window.innerHeight);

    contador();

}

function contador(){
    var later=new Date();
    later.setHours(later.getHours()+3);

    console.log(later)

    $('#clock').countdown(later, function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });
}