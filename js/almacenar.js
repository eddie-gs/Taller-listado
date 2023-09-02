// Javier Gularte - Grupo 277

const input = document.getElementById("item");
const addButton = document.getElementById("agregar");
const list = document.getElementById("contenedor");
const clearButton = document.getElementById("limpiar");

addButton.addEventListener("click", () => {
    if (input.value != "") {    
        if (window.localStorage.getItem("userList") == null) {
            storageValue = ""
        } else {
            storageValue = window.localStorage.getItem("userList");
        }
        savedItem = `<li>${input.value}</li>`;
        window.localStorage.setItem("userList", storageValue + savedItem);
        list.innerHTML = window.localStorage.getItem("userList");
        input.value = "";
    }
})

list.innerHTML = window.localStorage.getItem("userList");

clearButton.addEventListener("click", () => {
    localStorage.clear();
    list.innerText = "";
});