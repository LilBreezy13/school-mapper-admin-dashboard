
// CRUD schools with realtime updates
// db.collection('schools').onSnapshot(...)

function openForm(){document.getElementById('schoolForm').classList.remove('hidden')}
function closeForm(){document.getElementById('schoolForm').classList.add('hidden')}

function saveSchool(){
  // db.collection('schools').add({
  //   name, region, address,
  //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   contacts: [], mocks: [], terminals: []
  // })
  closeForm()
}
