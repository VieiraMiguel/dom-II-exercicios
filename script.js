
function adicionaItem() {

    const novoItem = document.createElement("article")
    novoItem.setAttribute("class", "item")
    novoItem.setAttribute("onclick", "removeItem(event)")
    
    const container = document.getElementById("container")
    container.appendChild(novoItem)
   
}

function removeItem(event) {

    event.target.remove()

}