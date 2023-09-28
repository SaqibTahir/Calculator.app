let string ='';
let buttons = document.querySelectorAll('.effect');
Array.from(buttons).forEach((effect) => {
    effect.addEventListener('click' ,  (e)=> {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
         else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value=string;
        }

        else{
            console.log(e.target);
            string = string+e.target.innerHTML;
            document.querySelector('input').value=string;

        }
            
        })
        
    
});
