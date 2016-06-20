function addItem(data) {
    var li = "<li><span class=\"pull-left\">" + data + "</span><button class=\"pull-right\">X</button></li>";
    $('#todo-list').append(li);
    $('#todo-list li button').on('click', deleteItem);

    fillStorage(data);
};

function deleteItem(e) {
    var value = $(this).parent().children()[0].innerHTML;
    console.log(value);
    clearStorage(value);
    $(this).parent().remove();
};

function fillStorage(data) {
    var lastIndex = $($('#todo-list')[0].lastChild).index();
        window.localStorage.setItem(lastIndex, data);

    var key = $('#storage-container #key');
    var value = $('#storage-container #value');

    var keyLi = "<li><span class=\"pull-left\">" + lastIndex + "</span></li>";
    var valueLi = "<li><span class=\"pull-right\">" + data + "</span></li>";

    key.append(keyLi);
    value.append(valueLi);
}

function clearStorage(value) {
    window.localStorage.removeItem(key);

    var spanToFind = "<span class=\"pull-left\">" + value + "</span>"
    var indexWhereDelete = $($('#todo-list #value').find('span:contains('+ value +')').parent()).index();

    console.log($('#todo-list #value').find('span:contains('+ value +')').parent());
    console.log(indexWhereDelete);
}

window.manager = {
    add: addItem
};