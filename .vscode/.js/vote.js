function vote(){
    //alert("Hello");
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var par=document.getElementById("par");

    if(age>18){
    // alert("Eligible to vote");
       par.innerHTML = "You are Eligible"
    }else{
    // alert("You are minor");
      par.innerHTML = "You are still a Child🤣😂😁😎"
    }
}