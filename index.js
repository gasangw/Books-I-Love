const List = document.getElementById('list');
const btn = document.getElementById('btn');
const searchVal = document.getElementById('search')

searchVal.addEventListener('keyup', e => {
    let val = searchVal.value.toLowerCase();
    const allTexts = List.querySelectorAll('p');
    allTexts.forEach(ele => {
        if(ele.textContent.toLowerCase().includes(val)){
            ele.parentElement.style.display = 'flex'
        } else {
            ele.parentElement.style.display = 'none' 
        }
    })
})


List.addEventListener('click', e=> {
    if(e.target.id === 'btn'){
        let li = e.target.parentElement
        li.remove()
    }
})

const form = document.getElementById('form')
form.addEventListener('submit', e=> {
    e.preventDefault();
    const InputValue = form.firstElementChild.value;
    let li = document.createElement('li')
    li.classList.add('mytext')
    li.innerHTML = `<p class="text-2xl text-white font-medium pl-3">${InputValue}</p>
    <button type="button" id="btn" class="bg-pink-500 px-5 py-2 text-white font-semibold rounded-lg">
        Delete 
    </button>`;

    List.appendChild(li)

    form.firstElementChild.value = ''
})
