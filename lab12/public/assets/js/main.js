document.getElementById('icon').addEventListener('click', cl_Div);
function cl_Div() {
    var checkbox = document.getElementById('nav-toggle');
    if (checkbox.checked) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    }
}