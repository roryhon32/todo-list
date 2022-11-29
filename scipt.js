function AddTask() {
  const itemlist = document.getElementById("task").value;
  console.log(itemlist);
let x=0
  const confirmation = confirm("DESEJA ADICIONAR ESSA TAREFA?");
  if (itemlist == "") {
    alert("DIGITE UMA TAREFA ANTES DE ADICIONAR");
    confirmation = false;
  }

  if (confirmation) {
    const ul = document.getElementById("TaskList");
    const listItem = document.createElement("li");
    listItem.innerText = itemlist;
    listItem.id='item'+(x+=1)
    ul.appendChild(listItem);
    document.getElementById("task").value = "";
  }

}


function RemoveTask(){
let x= 1
  const itemRemove=document.getElementById('item'+(x))
itemRemove.remove()


}