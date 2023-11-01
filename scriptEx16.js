function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoPreenchido = window.document.getElementById('txtAno')
    var res = window.document.getElementById('res')

    if(anoPreenchido.value.lenght == 0 || anoPreenchido.value > ano )
    {
        window.alert('[ERRO] Tente novamente!')
    }else{
        if(anoPreenchido.value < 1910){
            window.alert('[ERRO] Tente novamente!')
        }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(anoPreenchido.value)
        res.innerHTML = `Idade calculada: ${idade} anos.`
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} anos.`
        }
    }
}