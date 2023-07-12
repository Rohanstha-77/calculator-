let string = "";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'c'){
            string = "";
            document.querySelector('input').value = string;
        }else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
//code to make mpus mminus and percent functional
// let mPlus = document.querySelector('.mplus');
// let mMinus = document.querySelector('.mMinus');
// let percent = document.querySelector('.percent');
// let memory = 0;
// mPlus.addEventListener('click',()=>{
//     memory = memory + parseInt(document.querySelector('input').value);
//     document.querySelector('input').value = memory;
// }
// )
// mMinus.addEventListener('click',()=>{
//     memory = memory - parseInt(document.querySelector('input').value);
//     document.querySelector('input').value = memory;
// }
// )
// percent.addEventListener('click',()=>{
//     memory = memory * parseInt(document.querySelector('input').value)/100;
//     document.querySelector('input
//     ').value = memory;
// }
// )

