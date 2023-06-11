function validar_url(){
    var url = input_url.value
    var input = document.getElementById('input_url')



    if(url == ""){
     input.style.border = '2px solid red'
    }
    else{
        document.getElementById('img_atual').src = `${url}`
    }
    }