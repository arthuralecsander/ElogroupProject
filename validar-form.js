function Validar(){
    var formu = document.forms['formulario'];
    var fNome = formu.nome.value;
    var fTel = formu.tel.value
    var Matches = /[A-z]/g;
    $('#ComoConheceuId').val($('#comoComId').children("option:selected").val());

    var error = false;
    if(fNome == ""){
        alert('Nome nao pode ser vazio');
        formu.nome.focus();
        error = true;
        
    }else if(fNome.indexOf(" ")==-1){
        alert('Preencha com pelo menos um sobrenome');
        error=true;
    }
    if((fTel.match(Matches) != null)){
        alert('Apenas Numeros');
        error=true;
    }
    if(fTel.length != 11){
        alert('Telefone invalido');
        error=true;
    
    }else if(fTel.substring(2,3)!="-"){
        alert('Formato de telefone incorreto, formato corerto: xx-xxxxxxxx');
        error=true;
    
        
    }else if(fTel = ""){
        $('#tel').value("");
        error=false;
    }
    
    if(error){
        return false;
    }else{
        PostEnviar();
        return true;
    }
}

function changeSocial(){
    if(fmidia=="Sim"){
        $('.sociais').show();
    } else{
        $('.sociais').hide();
        $('#facebookid').prop("checked", false);
        $('#linkedInid').prop("checked", false);
        $('#instagramid').prop("checked", false);
    }
}

function PostEnviar(){

        var json = ConverterJSON("#formid");
        var Form = this;
        alert(JSON.stringify(json));
    
        $.ajax({
            cache: false,
            url: 'http://localhost:8080',
            type: "POST",
            dataType: "json",
            data: json,
            context: Form
        });
    
    
};

 
function ConverterJSON(form) {
	var array = jQuery(form).serializeArray();
	var json = {};

	jQuery.each(array, function () { 
		if (this.name != 'redesocial') {
            json[this.name] = this.value || '';
		}
	}
	);
	if ($('input[name="midia"]:checked').val() === "Sim") {
		var checkbox = [];
		$('input[type=checkbox]:checked').each(function () {
			checkbox.push($(this).val());
		});
		json['Midia Social'] = checkbox;
	}
	return json;
}
