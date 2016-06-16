function buildListItem(dataToAdd) {
    var listItem = document.createElement('li');
    var div = document.createElement('div');
    var span = document.createElement('span');
    var button = document.createElement('button');

    div.setAttribute("class", "list-item-wrapper");
    button.setAttribute("class", "button-delete");
    
    span.innerText = dataToAdd;
    button.innerText = "X";
    button.setAttribute("onclick","deleteListItem(event)");

    div.appendChild(span);
    div.appendChild(button);

    listItem.appendChild(div);

    return listItem;
}

function deleteListItem(event) {
    event.path[3].removeChild(event.path[2]);
}

function addNewItem() {
    var dataToAdd = document.getElementById("todo-input").value;
    var list = document.getElementById('todo-list');
    
    if (dataToAdd) {
        var listItem = buildListItem(dataToAdd);
        list.appendChild(listItem);
        document.getElementById("todo-input").value = "";
    }
}