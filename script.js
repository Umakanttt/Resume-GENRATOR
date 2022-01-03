 function addNewWEField(){
//  console.log( "adding new field ")

let newNode=document.createElement("textarea") ; 
newNode.classList.add("form-control") ; 
newNode.classList.add("weField") ; 
newNode.classList.add("mt-2") ; 
newNode.setAttribute("placeholder","Enter here") ; 
newNode.setAttribute("rows",3) ; 


let weOb= document.getElementById("we") ; 
let weAddButtonOb=document.getElementById("weAddButton") ; 

weOb.insertBefore(newNode,weAddButtonOb) ; 


 }
 function addNewAQField(){
    
    let newNode=document.createElement("textarea") ; 
    newNode.classList.add("form-control") ; 
    newNode.classList.add("eqField") ; 
    newNode.classList.add("mt-2") ; 
    newNode.setAttribute("placeholder", "Enter here") ; 
    newNode.setAttribute("rows",3) ; 
    
    
    let aqOb =document.getElementById("aq") ; 
    let aqAddButtonOb =document.getElementById("aqAddButton") ; 
    
    aqOb.insertBefore(newNode,aqAddButtonOb) ; 
    
    
     }

     //GENERATING CV 

     function generateCV(){
        let nameField = document.getElementById("nameField").value ; 
        let nameT1 = document.getElementById("nameT1") ; 
        nameT1.innerHTML=nameField;

        //direct process 
        document.getElementById("nameT2").innerHTML=nameField;

        // contact updation 
        document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
        document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

        //address updation 
        document.getElementById("fbT").innerHTML=document.getElementById("fbField").value ; 

        document.getElementById("inT").innerHTML=document.getElementById("instaField").value ; 

        document.getElementById("linkT").innerHTML=document.getElementById("linkField").value ; 

        //setting up the objective 
        document.getElementById("ObjectiveT").innerHTML=document.getElementById("objectiveField").value;

        //For Work experience we have multiple fields with same name
        //we have to get data class wise and use loop '
        let wes =document.getElementsByClassName("weField")

        let str=""
        for(let e of wes){
            str= str + `<li> ${e.value}</li>` ;  

     }

     document.getElementsByClassName("weS").innerHTML=str; 
     document.getElementById("cv-form").style.display="none"
     document.getElementById("cv-template").style.display="block" ; 
    }

    //prnting CV 
    function printCV (){
        window.print(); 
    }