function clear() {
    this.className = "";
    this.placeholder = "";
}

function validate() {
    var input = $('#todo-input');
    if ( !input.val() ) {
        input[0].className = "todo-input-not-validated";
        input[0].placeholder = "Value can't be empty";
        return false;
    }
    return true;
};

window.validator = {
    validate : validate,
    clear: clear
};