

let equation="";
let allBtns =$('.box');
for (let i = 0; i < allBtns.length; i++) {


allBtns[i].addEventListener('click',(e)=>{
let selectedBtn=e.target.innerHTML;

if(selectedBtn=='='){
    evaluate();
}
else if(selectedBtn=='C'){
    clearAll();
}
else if(selectedBtn=='Cl'){
    backSpace();
}
else{
    equation+=selectedBtn;
    document.querySelector("#display p").innerHTML=equation;
}




})
   
}


// EQUAL TO FUNCTION
function evaluate(){
      let aud=new Audio("./kick-bass.mp3");
    aud.play();
    let ans=eval(equation);
    $('#display h3').text(ans);
    equation=$('#display h3')[0].innerHTML;

   
    let question=$('#display p')[0].innerHTML;
    if(localStorage.getItem('equations')==null){
        let store=[];
        store.push(question);
        localStorage.setItem('equations',JSON.stringify(store));
    }
    else{
        store=JSON.parse(localStorage.getItem('equations'));
        store.push(question);
        localStorage.setItem('equations',JSON.stringify(store));

        
    }

  
}


// CLEAR ALL FUNCTION
function clearAll(){
    $('#display h3').text(null);
    document.querySelector("#display p").textContent=null;
    equation=""}



    // MOST DIFFICULT BACKSPACE FUNCTION
function backSpace(){
  
   
if($("#display h3")[0].innerHTML=='')
{
    let q= $("#display p")[0].innerHTML;
    q=q.slice(0,q.length-1);
    $("#display p")[0].innerHTML=q;
    equation=q;
    console.log("when length is  equa 0")


}
   


  else  if(equation.length!==0){

        
        equation=equation.slice(0,equation.length-1);
        $("#display h3")[0].innerHTML=equation;
        console.log("when length is not equa 0")


       

    }

 

   
   
}

$('#brightness').on('click',function(){
    
document.getElementById("brightness").classList.toggle("rotate");
   

    
    animation();
    Color();

})
function animation(){
let logo=$("#brightness").attr("src");
if(logo=='./brightness.png'){
 

    $("#brightness").attr("src","./night-mode.png")

}

else{
    

    $("#brightness").attr("src","./brightness.png");
 
}


}



function Color() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    let sec=$('#top-part');
    if(sec.hasClass("top")==true){
        sec.removeClass("top");
        sec.addClass("s");
 
    }
    else if(sec.hasClass("top")==false){
 
 sec.removeClass("s");
 sec.addClass("top");
    }



    let box=$('.box');
    if(box.hasClass("box-clr")==true){
        box.removeClass("box-clr");
        box.addClass("box-clr-day");
    }
    else{
        box.removeClass("box-clr-day");
        box.addClass("box-clr");
    }


    let display=$('#display');
    if(display.hasClass("display-clr-nt")==true){
        display.removeClass("display-clr-nt");
        display.addClass("display-clr-day");

    }
    else{
        display.removeClass("display-clr-day");
        display.addClass("display-clr-nt");
    }


    let head=$('nav span');
    if(head.hasClass("span-clr-nt")==true){
        head.removeClass("span-clr-nt");
        head.addClass("span-clr-day");
    }
    else{
        head.removeClass("span-clr-day");
        head.addClass("span-clr-nt");
    }




    let lg=$("#history");
    if(lg.hasClass("hist")==true){
  lg.removeClass("hist");
    }
    else{
        lg.addClass("hist");
    }



    let list=$("#list");
    if(list.hasClass("list-clr-nt")==true){
        list.removeClass("list-clr-nt");
        list.addClass("display-clr-day");
    }
    else{
        list.removeClass("display-clr-day");
        list.addClass("list-clr-nt");
    }
  
    let listText=$("#list p").css("color");
    if(listText=='rgb(255, 255, 255)'){
        $("#list p").css("color",'rgb(0,0,0)');
    }
    else{
        $("#list p").css("color",'rgb(255, 255, 255)');
    }



    let displayText=$("#display p,h3").css("color");
    if(displayText=='rgb(255, 255, 255)'){
        $("#display p,h3").css("color","black");
    }
    else{
        $("#display p,h3").css("color","rgb(255, 255, 255)");
    }
  }













