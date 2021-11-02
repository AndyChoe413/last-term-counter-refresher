let counter = 0;

function poopComponent() {
    let poopCtn = document.createElement('div')
    poopCtn.innerHTML = `
        < div class="poop-div" >
            <img src="https://elephant.art/wp-content/uploads/2019/11/poop-emoji.jpg">
        </div >
    `
    return poopCtn
}

const poopCtnElement = document.querySelector('.poopCtn')

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
    deletePoop()
}

const add = () => {
    counter++
    countChangeHandler()
    poopCtnElement.appendChild(poopComponent())
}

const renderCount = () => {
    counterH1.innerText = counter
}

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', remove)

const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', add)

const counterH1 = document.querySelector('#counterText')


function deletePoop() {
    const section = document.querySelector('.poopCtn')
    section.removeChild(section.lastElementChild)
}

