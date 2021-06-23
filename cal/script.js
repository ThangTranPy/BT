function insert(num){
    document.getElementById('result').value = document.getElementById('result').value + num;
}

function equal(){
    var res = document.getElementById('result').value
    if(res){
        document.getElementById('result').value = eval(document.getElementById('result').value);
    }else{
        document.getElementById('result').value = ""
    }
}

function reset(){
    document.getElementById('result').value = ""
}

function back(){
    var res = document.getElementById('result').value
    if(res){
        document.getElementById('result').value = res.substring(0, res.length-1)
    }
}