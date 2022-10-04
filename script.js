function adicionaItem(event){
    let novoItem = document.createElement("Item")
    console.log(novoItem)

    novoItem.innerHTML = "Novo item"
    
    let addContainer = document.getElementById("container")
    console.log(addContainer)

    addContainer.insertAdjacentElement("beforeend", novoItem)

    novoItem.setAttribute("class", "item")
    
}

function removeItem(event) {
    const remover = document.querySelector(".item")
    remover.classList.remove("item")
    
}