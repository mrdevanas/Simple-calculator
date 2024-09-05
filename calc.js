function num(number){
    document.getElementById("inp").value += number;
    }
    function tos() {
        document.getElementById("inp").value = eval(document.getElementById("inp").value);
    }
    function again(){
        document.getElementById("inp").value = ""
    }