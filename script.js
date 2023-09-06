const btns = document.querySelectorAll('button');
wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.length);
// console.log(btns[1].classList.add('red'));

// if(btns[0].classList.contains('some')){
//     console.log('some is present');
// }

// btns[0].addEventListener('click', (event) => {

//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

//     //or 

//     // btns[1].classList.toggle('red');
// })

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('hello');
    }else{
        console.log("not red")
    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


