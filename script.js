let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    let p=e.target.innerHTML;
    if(string.length==1 && e.target.innerHTML=='x')
    {
        string+="0";
    }
    if(e.target.innerHTML == '=')
    {
      try{
      string =eval(string);
      document.querySelector('input').value = string;
      }catch(error)
      {
       document.querySelector('input').value="Math Error!";
      }
    }
        else if(e.target.innerHTML == 'x' && string.length!=1)
    {
      string= string.substring(0,string.length-1);
      document.querySelector('input').value = string;
    }
     else if(e.target.innerHTML == 'AC')
    {
      string ="0";
      document.querySelector('input').value = string;
    }
     else if(e.target.innerHTML == 'OFF')
    {
      string =" ";
      document.querySelector('input').value = string;
    }
    else
    {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value=string;
    }
  })
  
})