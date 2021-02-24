console.log("checking");
showfunction();
let addtxt = document.getElementById('addbtn').addEventListener('click', (e) => {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj))
    addtxt.value = "";
    console.log(notesobj);
    showfunction();
})
function showfunction() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;>
            <div class="card-body">
                <h5 class="card-title">notes ${index + 1} </h5>
                <p class="card-text">${element}</p>
                <button id = ${index} onclick ="deletenote(this.id)"  class="btn btn-primary">Delete</button>
            </div>
        </div>
    </div>
        `

    });
    let noteselm = document.getElementById('notes');
    // noteselm.innerHTML = `<b> this is testing </b>`;
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `you haven't saved any of the notes till now"to do that write in the textarea and click add text!"`
    }

}
//funtion to delete the note
function deletenote(index) {
    console.log('delete this note');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showfunction();


}
let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})