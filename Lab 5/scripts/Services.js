var checkBoxes = $('tbody .myCheckBox');
checkBoxes.change(function () {
    $('#confirmButton').prop('disabled', checkBoxes.filter(':checked').length < 1);
});
checkBoxes.change(); // or add disabled="true" in the HTML