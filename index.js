const form = document.querySelector('form')
const btnDel = document.querySelector('.btnDelete')
btnSend = document.querySelector('.btnSend')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/users',{
        method: "POST",
        headers:{ 'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: e.target[1].value
    }),
    })
    .then((res)=> res.json())
    .then((btnSend) => {
        console.log("Success!", form);
    })
    .catch((err)=>{
        console.log("Error", err);
    })
})

btnDel.addEventListener('click',()=>{
    let question = prompt('Enter the id')
    fetch(`http://localhost:3000/users/${question}`, { method: 'DELETE' })
    .then(() => console.log('Delete successful'));
})