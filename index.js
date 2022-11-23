function find(){
    var result = 0;
    var totalEgg = parseInt(document.getElementById('num').value);
    var x = totalEgg%10;
    if(x<5){
      result = totalEgg - x + 5;
    }
    if(x===5 || x===0){
        result = totalEgg;
    }
    if(x>5){
        result = totalEgg- x + 10;
    }
    alert(result)
}