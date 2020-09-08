// The jQuery counter

// $('.product__btn--plus').click(function() {
//     const prodNumber = $('.product__number');
//     console.log(prodNumber);
//     //let plusNumber = document.querySelector('.product__number').innerText;
//     let plusNumber = $('.product__number').text();
//     plusNumber++;
//     console.log(plusNumber)
//     $(".product__number").text(plusNumber);
// });
//
// $('.product__btn--minus').click(function() {
//     const prodNumber = $('.product__number');
//     //let plusNumber = document.querySelector('.product__number').innerText;
//     let plusNumber = $('.product__number').text();
//     if(plusNumber != 0) {
//     plusNumber--;
//     console.log(plusNumber)
//     $(".product__number").text(plusNumber);
//     }
// });

// The vanilla Javascript counter

const btnContainer = document.querySelector('.product__btnWrapper');
btnContainer.addEventListener('click', plusBtn);

function plusBtn(event) {
    if(event.target.classList.contains("product__btn--plus")) {
        // console.log(event.target.parentNode.querySelector('.product__number'));
        const currentValue1 = event.target.parentNode.querySelector('.product__number');
        let addNumb = parseInt(currentValue1.innerText);
        addNumb++;
        currentValue1.innerText = addNumb;
    }
}

//     // plus
// const plusBtn = document.querySelector('.product__btn--plus');
// plusBtn.addEventListener('click', (event)=> {
//     const currentValue1 = document.querySelector('.product__number');
//     let addNumb = parseInt(currentValue1.innerText);
//     addNumb++;
//     currentValue1.innerText = addNumb;
// })

const btnContainer2 = document.querySelector('.product__btnWrapper');
btnContainer2.addEventListener('click', minusBtn);

function minusBtn(event) {
    // console.log(event.target.classList.contains("product__btn--minus"));
    if(event.target.classList.contains("product__btn--minus")) {
        const currentValue2 = event.target.parentNode.querySelector('.product__number');
    let removeNumb = parseInt(currentValue2.innerText);
    if(removeNumb != 0) {
        removeNumb--;
        currentValue2.innerText = removeNumb;
    }
    }
}

//     // minus
// const minusBtn = document.querySelector('.product__btn--minus');
// minusBtn.addEventListener('click', ()=> {
//     // console.log(minusBtn);
//     const currentValue2 = document.querySelector('.product__number');
//     let removeNumb = parseInt(currentValue2.innerText);
//     if(removeNumb != 0) {
//         removeNumb--;
//         currentValue2.innerText = removeNumb;
//     }
// })

// safe to local storage
const productNumb = document.querySelector('.product__busketNumb');
const shopBtn = document.querySelector('.product__btnContainerB');
shopBtn.addEventListener('click', ()=> {
    // we change the currentValue3 into a string with innerText
    const currentValue3 = document.querySelector('.product__number').innerText;
    // get data from the localStorage and safe it in the variable cart
    let cart = localStorage.getItem('mosaix__pvshop');
    if(cart > 0) {
        // we take the variable cart and currentValue3 and change it with parseInt in an integer.
        // next we add up the two variables
        let resault = parseInt(cart) + parseInt(currentValue3);
        localStorage.setItem('mosaix__pvshop', resault);
    } else {
        localStorage.setItem('mosaix__pvshop', currentValue3);
    }
    // show data in the html element
    document.getElementById('product__busketNumb').innerHTML = localStorage.getItem('mosaix__pvshop');
})



// get data from localStorage (if there is any date)
document.addEventListener('DOMContentLoaded', ()=> {
    if(localStorage.getItem('mosaix__pvshop')) {
        const productNumb = document.querySelector('.product__busketNumb');
        document.getElementById('product__busketNumb').innerHTML = localStorage.getItem('mosaix__pvshop');
    }

})




