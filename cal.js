let display=document.getElementById("display")
let buttons=document.querySelectorAll(".button")
let equal =document.getElementById("equal")
let clear=document.getElementById("clear")
let text=" ";
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        text=e.target.innerText;
       if(text=="=")
       {
        try{
            
                display.value = eval(display.value);
            
        }catch(error){
            display.value="";
            alert("Invalid");
        }
       }
       else{
        try{
    
                display.value +=text;
        }
        catch(error){
            alert("Invalid")
        }
        
       }
      
       
    });
}

    clear.addEventListener('click',(e)=>{
        display.value='';
       }) 


function delLastChar(){
    display.value=display.value.slice(0,-1);
}

function power(){
    display.value=Math.pow(display.value,2);
}


function sin(){
    display.value=Math.sin(display.value);

}

function cos(){
    display.value=Math.cos(display.value);
}


function tan(){
    display.value=Math.tan(display.value);
}

function log(){
    display.value=Math.log(display.value);
}

function pi(){
    display.value=Math.PI;
}

function exp(){
    display.value=Math.exp(display.value);

}

function cube() {
    display.value=Math.pow(display.value,3);
  }

function root(){
    display.value=Math.pow(display.value,1/2);
}

function fact() { 
    let i,num,f;
    f=1;
    num=display.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    display.value=f;
 }


// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             text=eval(text);
//             display.value=text;
//         }
//         else if(e.target.innerHTML=='c')
//         {
//             display.value='0';
//             text=""
//         }
//         else
//         {
//         console.log(e.target)
//         text=text+e.target.innerHTML;
//         display.value=text;
//         }
        
//     })
// })
