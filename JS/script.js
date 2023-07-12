let toDoInput=document.querySelector(".toDoInput");
let toDolist=document.querySelector(".todolist-Div");
let reEditDiv=document.querySelector(".reEditDiv");
let reEditDivInput=document.querySelector(".reEditDivInput");
let update=document.querySelector(".update");
let todoToEdit;
let cancel=document.querySelector(".cancel");

const addToDo=()=>{

    if(toDoInput.value!=""){
        let newToDo=document.createElement("li");
        newToDo.textContent=toDoInput.value;
        toDolist.append(newToDo);
        toDoInput.value="";

        const div =document.createElement("div");
        div.classList.add("eleModify");
        newToDo.append(div) ;


        const buttonDone = document.createElement('button');
        buttonDone.classList.add('checkedComplete');
        buttonDone.innerHTML = '<i class="fas fa-check"></i>'

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.textContent = 'EDIT';

        const buttonCancel = document.createElement('button');
        buttonCancel.classList.add('delete');
        buttonCancel.innerHTML = '<i class="fas fa-times"></i>'

        //add items together
        div.append(buttonDone, buttonEdit, buttonCancel);


        buttonDone.addEventListener("click",doneBtn);
        buttonEdit.addEventListener("click",editBtn);
        buttonCancel.addEventListener("click",deleteBtn);
        // deleteBtn();
    }

}

const doneBtn=(e)=>{
    if(e.target.matches('.checkedComplete')){
        e.target.closest('li').classList.toggle('completed'); //after pressing complete, we add the completed class to the closest li element (grandfather).
        e.target.classList.toggle('completed');

    }


}
// let todoToEdit;

const editBtn=(e)=>{

    if (e.target.matches('.edit')) {
        // alert("Yes Matched");
        todoToEdit=e.target.closest('li');
        reEditDivInput.value=todoToEdit.firstChild.textContent;
        reEditDiv.style.display = 'flex';
        update.addEventListener("click",changeTodoText);
        cancel.addEventListener("click",closePopup);

    }

}
const changeTodoText = () => { //in
    if (reEditDivInput.value != '') {
    todoToEdit.firstChild.textContent = reEditDivInput.value;

        reEditDiv.style.display = 'none';
    }
}
const closePopup = () => {  //in

    reEditDiv.style.display = 'none';

}




const deleteBtn=(e)=>{

    if (e.target.matches('.delete')) {
        e.target.closest('li').remove();

    }



}