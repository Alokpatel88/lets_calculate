let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
const myButton = document.getElementById('myButton');

// Add event listener for the 'click' event
myButton.addEventListener('click', function() {
  // Toggle the 'pressed' class on the button
  myButton.classList.toggle('pressed');
});

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
