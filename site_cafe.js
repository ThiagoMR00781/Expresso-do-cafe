
function dolce_gusto(){
    abrirjaneladolce = window.open('dolce_gusto.html', 'pagina', "width=280 height=430");
}
function senseo(){
    abrirjanelasense = window.open('senseo.html', 'pagina', "width=280 height=430");
}
function nespresso(){
    abrirjanelanessp = window.open('nespresso.html', 'pagina', "width=280 height=430");
}
function fechar(){
    fechardolce = window.close(dolce_gusto());
    fecharsenso = window.close(senseo());
    fecharnespr = window.close(nespresso());
}
function expresimg(){
    document.getElementById('imgdolce').src = "img/CapsulaDulceGusto.jpg";
}
function descafimg(){
    document.getElementById('imgdolce').src = "img/CapsulaDulceGustoDescafeinado.jpg";
}
function classimg(){
    document.getElementById('imgsenso').src = "img/Senseo_Classico.jpg";
}
function intenimg(){
    document.getElementById('imgsenso').src = "img/SenseoIntenso.jpg";
}
function livanimg(){
    document.getElementById('imgnespr').src = "img/NespressoLivanto.png";
}
function ristrimg(){
    document.getElementById('imgnespr').src = "img/NespressoRistretto.png";
}
function vanilimg(){
    document.getElementById('imgnespr').src = "img/NespressoVanilio.png";
}
function piccol(){
    document.getElementById('imgvazio').src = "img/Dulce_Gusto.jpg";
    var precopic = "R$ 340,00";
    document.getElementById('preco').innerHTML = precopic;
}
function inissi(){
    document.getElementById('imgvazio').src = "img/Nespresso_Inissia.jpg";
    var precoini = "R$ 300,00";
    document.getElementById('preco').innerHTML = precoini;
}
function uc50(){
    document.getElementById('imgvazio').src = "img/Nespresso_C50.jpg";
    var precouc = "R$ 400,00";
    document.getElementById('preco').innerHTML = precouc;
}
function hd78(){
    document.getElementById('imgvazio').src = "img/Senseo.jpg";
    var precohd = "R$ 230,00";
    document.getElementById('preco').innerHTML = precohd;
}

function validaCPF() {

    var cpf_valido = document.getElementById('tamanho_input_2').value; 

    var soma = 0;
    var resto = 0;

    if (cpf_valido.length == 14 ){
        if (cpf_valido[i] != '0' || cpf_valido[i] != '1' || cpf_valido[i] != '2' || cpf_valido[i] != '3' || cpf_valido[i] != '4' || cpf_valido[i] != '5' || cpf_valido[i] != '6' || cpf_valido[i] != '7' || cpf_valido[i] != '8' || cpf_valido[i] != '9')
        alert('Dígitos verifivadores inválidos!');
        return false;
    }
  
    var caracter_cpf = cpf_valido.replace(/[^\d]/g, '');
    
    if (caracter_cpf.length !== 11){
        alert('O CPF tem que ter 11 dígitos');
        return false;
    }
       
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(caracter_cpf) !== -1){
        alert('Dígitos verifivadores inválidos!');
        return false;
      }
    
    for (i=1; i<=9; i++){
        soma = soma + parseInt(caracter_cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

    }          
        
    if ((resto == 10) || (resto == 11)){
            resto = 0;
    }

    if (resto != parseInt(caracter_cpf.substring(9, 10))){
            alert('Dígitos verifivadores inválidos!');
            return false;
        }
    
  
    soma = 0;
  
    for (i = 1; i <= 10; i++){
        soma = soma + parseInt(caracter_cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
    }
        if ((resto == 10) || (resto == 11)){
            resto = 0;
        }

        if (resto != parseInt(caracter_cpf.substring(10, 11))){
            alert('Dígitos verifivadores inválidos!');
            return false;
        }
    
    return true;
}

var valor = 0;
var mensagem = '';
function escreve_maquina(){
    var ind = document.getElementById('form_compras').maquinas.selectedIndex; 
    //pega o índice do elemento selecionado 
    var ind_maquina = maquinas.options[ind].text;

    if (ind = 0){
        valor += 340;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind_maquina +"\n"); 
    } else if (ind = 1){
        valor += 300;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind_maquina +"\n");
    } else if (ind = 2){
        valor += 400; 
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind_maquina +"\n");
    } else if (ind = 3){
        valor += 230; 
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind_maquina +"\n");
    }

    document.getElementById('tamanho_input_6').value = valor.toFixed();
       
}

function escreve_saches(){
    var ind2 = document.getElementById('form_compras').saches.selectedIndex;
    var ind2_sache = saches.options[ind2].text; 

    if (ind2 = 0){
        valor += 24;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n"); 
    } else if (ind2 = 1){
        valor += 21;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n"); 
    } else if (ind2 = 2){
        valor += 35;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n"); 
    } else if (ind2 = 3){
        valor += 42;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n"); 
    } else if(ind2 = 4){
        valor += 46;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n");
    } else if (ind2 = 5){
        valor += 14;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n");
    } else if (ind2 = 6){
        valor += 14;
        mensagem = (document.getElementById('mensagem').value = mensagem + "" + ind2_sache +"\n");
    }    
    document.getElementById('tamanho_input_6').value = valor.toFixed();
       
}

function apaga(){
    with (document.formulario){
        mensagem[mensagem.selectedIndex] = null;
    }
}

var cartoes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Mastercard: /^5[1-5][0-9]{14}/,
    Amex: /^3[47][0-9]{13}/,
    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}/
};

function testarCC(nr, cartoes) {
    for (var cartao in cartoes) if (nr.match(cartoes[cartao])) return cartao;
    return false;
}

var valido = '4444555566667777';
var invalido = '1234567890';

[valido, invalido].forEach(function(teste){
   console.log(testarCC(teste, cartoes)); 
});