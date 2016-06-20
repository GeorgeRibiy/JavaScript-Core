(function () {
    var button = $('#button-item-add').on('click', function () {
        if (validator.validate()) {
            var value = $('#todo-input').val()
            manager.add(value);
            $('#todo-input').val('');
        }
    });
    var input = $('#todo-input').on('change paste keyup', validator.clear);
})();