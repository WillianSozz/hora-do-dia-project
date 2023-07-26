function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas<br>Que Deus abençoe seu dia!`
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = './Manha.png'
        document.body.style.background = '#F4A460'
    } else if (hora>= 12 && hora <= 18) {
        //BOA TARDE
        img.src = './Tarde.png'
        document.body.style.background = '#FF8C00'
    } else {
        //BOA NOITE
        img.src = './Noite.png'
        document.body.style.background = '#191970'
    }
}
