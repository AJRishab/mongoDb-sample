const API = '/api/notes';
const token = localStorage.getItem('token');

if(!token) window.location.href = 'login.html';

async function fetchNotes() {
    const res = await fetch(API, { headers: { 'Authorization': `Bearer ${token}` }});
    const notes = await res.json();
    document.getElementById('notes').innerHTML = notes.map(n => `
        <div>
            <h3>${n.title}</h3>
            <p>${n.content}</p>
            <button onclick="deleteNote('${n._id}')">Delete</button>
        </div>
    `).join('');
}

async function addNote() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({title, content})
    });
    fetchNotes();
}

async function deleteNote(id) {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchNotes();
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

fetchNotes();
