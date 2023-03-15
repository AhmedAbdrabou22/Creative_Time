
let data1 = document.querySelector('.data1')
let data2 = document.querySelector('.data2')
let buttons = document.querySelectorAll('.button')
buttons.forEach((button)=>{
    // console.log(button.innerHTML);
    button.addEventListener('click',()=>{
        buttons.forEach((btn)=>{
            btn.classList.remove('border');
        })
        button.classList.add('border');
        if(button.getAttribute('data-check') == 'one'){
            data1.style.display = 'block';
            data2.style.display = 'none';
        }else if(button.getAttribute('data-check') == 'two'){
            data1.style.display = 'none';
            data2.style.display = 'block';
        }
    })
})