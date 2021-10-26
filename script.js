let counter = 0;

const countChangeHandler = () => {
    counterLogger()
    renderCount()
}

const counterLogger = () => {
    console.log(counter)
}
const remove = () => {
    counter--
    countChangeHandler()
}

const add = () => {
    counter++
    countChangeHandler()
}

const renderCount = () => {
    counterH1.innerText = counter
}

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', remove)

const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', add)

const counterH1 = document.querySelector('#counterText')


// function poopRender() {

//     const poopImg = document.createElement('DIV')
//     poopImg.innerHtml = '
        
//     < div class="poopCtn" >
//         <img src="https://elephant.art/wp-content/uploads/2019/11/poop-emoji.jpg">
//     </div >

//         ';
    
//     return poopImg;
// }

