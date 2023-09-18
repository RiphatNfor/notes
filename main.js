
document.addEventListener('DOMContentLoaded', function()
{
  var noteInput = document.getElementById('note-input');
  var addNoteBtn = document.getElementById('add-note-btn');
  var resetBtn = document.getElementById('reset-btn');
  var noteList = document.getElementById('note-list');

  addNoteBtn.addEventListener('click', function()
  {
    var noteText =
     noteInput.value.trim(); 
    if(noteText !== ''){
      var noteItem = 
      document.createElement('li');
      noteItem.textContent = noteText;
      noteList.appendChild(noteItem);
      noteInput.value = '';
    }
    
  });
  resetBtn.addEventListener('click', function(){
    noteList.innerHTML = '';
  });
});
 
