// funciones que usaremos
function generateId(){
    return parseInt(Math.random() * 1000)
}
const KEY = 'notas'

function getNotes(){
    const strNotes = localStorage.getItem(KEY)
    const notes = JSON.parse(strNotes)
    return notes
}

function insertNote(note){

    let notesSaved = getNotes()

    if(notesSaved){
        notesSaved.push(note)
    }else{
        notesSaved = [note]
    }
    
    window.localStorage.setItem(KEY,JSON.stringify(notesSaved))
}

function generateNote(title, description, pathImg){
    if(!pathImg) pathImg=''
    return {
        'id':`note-${generateId()}`,
        title,
        description,
        'date':new Date().toString(),
        pathImg
    }
}

function createNoteHTML(note){
    const section = document.createElement('SECTION')
    const title = document.createElement('H2')
    const p = document.createElement('P')
    const img = document.createElement('IMG')
    const date = document.createElement('H5')
    const hr = document.createElement('HR')
    const noteDescripcion = document.createTextNode(note.description)
    const titleNote = document.createTextNode(note.title)
    const dateText = document.createTextNode(note.date)

    title.appendChild(titleNote)
    p.appendChild(noteDescripcion)
    p.setAttribute('width',"80%")
    date.appendChild(dateText)

    section.setAttribute('id',`${note.id}`)

    section.appendChild(title)
    section.appendChild(p)

    if(note.pathImg) {
        img.setAttribute('src', note.pathImg)
        img.setAttribute('alt', note.title)
        img.setAttribute('width', '20%')
        section.appendChild(img)
    }

    section.appendChild(date)
    section.appendChild(hr)
    
    return section
}

function addNoteToHTML(sectionNote){
    const mainSection = document.getElementById('container-note')
    mainSection.appendChild(sectionNote)
}

function renderNotes(){
    const notes = getNotes()

    if (!notes) return

    notes.forEach(note => {
        addNoteToHTML(createNoteHTML(note))
    });

}
//obtener los elementos

const btnAdd = document.getElementById('btn-save');

btnAdd.addEventListener('click', function(event){
    
    event.preventDefault()
    const titleNote = document.getElementById('input-title')
    const inputPathImg = document.getElementById('input-img')
    const noteArea = document.getElementById('ta-note')

    const textTitle = titleNote.value
    const textNote = noteArea.value
    const pathImg = inputPathImg.value

    if(!textTitle || !textNote) {
        alert('Faltan datos de la Nota')
        return
    }

    const note = generateNote(textTitle, textNote,pathImg)
    insertNote(note)
    titleNote.value = '' //limpiar el input
    noteArea.value = ''
    inputPathImg.value = ''

    const noteHTML = createNoteHTML(note)
    
    addNoteToHTML(noteHTML)
})

renderNotes()//ejecuto la funcion