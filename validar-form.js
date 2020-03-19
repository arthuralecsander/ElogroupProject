function Validar(){
    var formu = document.forms['formulario'];
    var fNome = formu.nome.value;
    var fTel = formu.tel.value;


    var error = false;
    if(fNome == ""){
        alert('Campo nao pode ser vazio');
        formu.nome.focus();
        error = true;
        
    }else if(fNome.indexOf(" ")==-1){
        alert('Preencha com pelo menos um sobrenome');
        error=true;
    }
    if(fTel.length != 11){
        alert('Telefone invalido');
        error=true;

    }else if(fTel.substring(2,3)!="-"){
        alert('Formato de telefone incorreto xx-xxxxxxxx');
        error=true;

    }
    if(error){
        return false;
    }else{
        return true;
        PostEnviar();
        
    }
}
function PostEnviar(){

}
