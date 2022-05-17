$('#history').on('click',function(){

    chek();
});

function chek(){
    if( $('#list p')[1].textContent==''){

        showHistory();
    }
    else{
        
        $('#list p')[0].textContent='';
        $('#list p')[1].textContent='';
        $('#list p')[2].textContent='';
        $('#list p')[3].textContent='';
        $('#list p')[4].textContent='';
    }
  
}

function showHistory(){
 
    let arrayOfq=JSON.parse(localStorage.getItem("equations")); 
    let arrayqLength=arrayOfq.length;

     
        $('#list p')[0].textContent="○ " +arrayOfq[arrayqLength-1];
        $('#list p')[1].textContent="○ " +arrayOfq[arrayqLength-2];
        $('#list p')[2].textContent="○ " +arrayOfq[arrayqLength-3];
        $('#list p')[3].textContent="○ " +arrayOfq[arrayqLength-4];
        $('#list p')[4].textContent="○ " +arrayOfq[arrayqLength-5];


}

