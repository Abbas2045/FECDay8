// document.getElementById("textinput").value
// console.log(document.getElementById("textInput").value);
const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", addcontent);


function addcontent() {
    console.log("It's work")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")
    /* result.innerHTML = text */
    result.innerHTML += `<h1>${text}</h1>`
}

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

async function ferchdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.jason()
    const titlelist = document.getElementById("titleList")
    for (let i=0; i < json.length; i++){
        titlelist.innerHTML += `<h3>$(json[i].title)</h3>`
    }
}