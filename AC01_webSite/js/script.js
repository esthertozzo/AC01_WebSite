function botaoLogIn(){
    var password = document.getElementById("senha").value;
    if(password == ""){
        alert('Antes de confirmar se não é um robô, preencha os campos de email e de senha corretamente!');
    }else{
        $("#exampleModal").modal();
    }
}

function check(){

        if (document.getElementById('check').checked == true) {
          document.getElementById('avancar').disabled = ""
        }
        if (document.getElementById('check').checked == false) {
          document.getElementById('avancar').disabled = "disabled"
        }
      
      
}

function botaoAvancar(){
  
}