//element.classList.[add,remove, contain, toggle]

const btn = document.getElementsByTagName('button')[0]

// btn.addEventListener('click', function(e){
//     const modal = document.getElementsByClassName('modal')[0]
//     document.body.style.backgroundColor = 'white'
//     modal.classList.toggle('hidden')

// })

addEventListener('click', function(e){
    
    if(e.target.localName === 'a'){
        const modal = document.getElementsByClassName('modal')[0]
        modal.classList.toggle('hidden')
        if(e.target.innerText === 'Aceptar'){
            this.document.body.style.backgroundColor = 'green'
        }
        if(e.target.innerText === 'Cancelar'){
            this.document.body.style.backgroundColor = 'tomato'
        }
    }

    if(e.target.id === 'btn-Modal'){
        const modal = document.getElementsByClassName('modal')[0]
        document.body.style.backgroundColor = 'white'
        modal.classList.toggle('hidden')
    }
    
})