 const addtitle      = document.getElementById('addtitle');
 const addtext       = document.getElementById('addtext');
 const addnote       = document.getElementById('addnote');
 const displaynotes  = document.getElementById('notes');
 
let notes=[];
 function addnotes(){
          if(addtitle.value==''){
            alert('add your title')
            return;
          }
          if(addtext.value==''){
            alert('add your notes')
            return;
          }

          const notesvalue= {
                title : addtitle.value,
                text  : addtext.value,
          }
          notes.push(notesvalue)
          showNotes();
 }
 function showNotes(){
          let showNotes=''
          for(let i=0;i<notes.length;i++){
               showNotes+= `<div class="note">
                            <button>Delete</button>
                            <div class="title">${notes[i].title}</div>
                             <div class="text">${notes[i].text}</div>
                            </div>`
          }
          displaynotes.innerHTML = showNotes;
 }

 addnote.addEventListener('click',addnotes)  