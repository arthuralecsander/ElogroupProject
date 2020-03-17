function Validar(){
    var fNome = formulario.nome.value;

    if(fnome == "a"){
        alert('Erro ao preencher');
        formulario.nome.focus();
        return false;
    }
}