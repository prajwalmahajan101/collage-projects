const input =  document.getElementById("Age");
const result = document.getElementById("result");
const input_2 =  document.getElementById("des");
const btn = document.getElementById("btn");
const result_2 = document.getElementById("result_2");

input.addEventListener('blur',(evt)=>{
    let  age = +evt.currentTarget.value;
    if(age>18){
        result.textContent = "Age is greater than 18";
    }
    else {
        result.textContent = "Age is Less than 18";
    }
})

btn.addEventListener('click',(evt)=>{
    let input_str = input_2.value;
    let count  = input_str.split(' ').filter((word) => { if (word !== '') return word }).length;
    result_2.textContent = "There are "+count+" words in the description field"; 
})

