
  let value="X"
function change(obj1){

     if(obj1.innerHTML==""){
        if(value=="X"){
            obj1.innerHTML=value;
            check(obj1);
            value="O"
        }
        else{
            obj1.innerHTML=value;
            check(obj1);
            value="X"; 
        }
      }
        let v=obj1.innerHTML;
      console.log(v);
      console.log(obj1.id);
          
   }
  
   function check(obj1){
      let v=obj1.innerHTML;
      let v1=document.getElementById("v1").innerHTML;
      let v2=document.getElementById("v2").innerHTML;
      let v3=document.getElementById("v3").innerHTML;
      let v4=document.getElementById("v4").innerHTML;
      let v5=document.getElementById("v5").innerHTML;
      let v6=document.getElementById("v6").innerHTML;
      let v7=document.getElementById("v7").innerHTML;
      let v8=document.getElementById("v8").innerHTML;
      let v9=document.getElementById("v9").innerHTML;
     
      
      if((v1==v&&v2==v&&v3==v)||(v1==v&&v5==v&&v9==v)||(v1==v&&v4==v&&v7==v)){
            alert(`${v} wins`);
            let playagain = confirm("Play again");
            playagain ? clrdata() : alert("Thanks for playing");
      }
      else if((v1==v&&v2==v&&v3==v)||(v5==v&&v2==v&&v8==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
         
      }
      else if((v1==v&&v2==v&&v3==v)||(v3==v&&v5==v&&v7==v)||(v3==v&&v6==v&&v9==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
   }
      else if((v1==v&&v4==v&&v7==v)||(v5==v&&v4==v&&v6==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
      }
      else if((v1==v&&v5==v&&v9==v)||(v3==v&&v5==v&&v7==v)||(v2==v&&v5==v&&v8==v)||(v4==v&&v5==v&&v6==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
   }
      else if((v3==v&&v6==v&&v9==v)||(v6==v&&v5==v&&v4==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
      }
      else if((v1==v&&v4==v&&v7==v)||(v7==v&&v8==v&&v9==v)||(v7==v&&v5==v&&v3==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
   }
      else if((v7==v&&v8==v&&v9==v)||(v2==v&&v5==v&&v8==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
      }
      else if((v1==v&&v5==v&&v9==v)||(v7==v&&v8==v&&v9==v)||(v3==v&&v6==v&&v9==v)){
         alert(`${v} wins`);
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
   }
   else{
      let draw=true;
      for(let i=1;i<=9;i++){
         if(document.getElementById(`v${i}`).innerHTML===""){
            draw=false;
            break;
         }
      }
      if(draw){
         alert("Draw");
         let playagain = confirm("Play again");
         playagain ? clrdata() : alert("Thanks for playing");
         }
      }
       
               
   }


function clrdata(){
   location.reload();
   obj1="";
}