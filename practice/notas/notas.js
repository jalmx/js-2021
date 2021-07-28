// funciones que usaremos
function generateId(){
    return parseInt(Math.random() * 1000)
}

function getNotes(){
 
}

function insertNote(note){

}

function generateNote(noteDescripcion){
    return {
        'id':`note-${generateId()}`,
        'description': noteDescripcion
    }
}

function createNoteHTML(note){
    const section = document.createElement('SECTION')
    const p = document.createElement('P')
    const hr = document.createElement('HR')
    const noteDescripcion = document.createTextNode(note.description)
    p.appendChild(noteDescripcion)
    section.setAttribute('id',`${note.id}`)
    section.appendChild(p)
    section.appendChild(hr)
    
    return section
}

function addNoteToHTML(sectionNote){
    const mainSection = document.getElementById('container-note')
    mainSection.appendChild(sectionNote)
}

function loadNotesSaved(){
    
}
//obtener los elementos

const btnAdd = document.getElementById('btn-save');
const notesSection = document.getElementById('container-note')

btnAdd.addEventListener('click', function(event){
    event.preventDefault()
    const noteArea = document.getElementById('ta-note')
    const textNote = noteArea.value
    //agregar validacion de nota vacia
    const note = generateNote(textNote)
    noteArea.value = ''
    const noteHTML = createNoteHTML(note)
    addNoteToHTML(noteHTML)

})


