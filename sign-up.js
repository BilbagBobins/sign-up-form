function confirm() {
    if (userpwd.value || confirmpwd.value) {
        if (userpwd.value === confirmpwd.value) {
            message.style.color = 'green';
            message.innerHTML = 'Passwords matching';
        } else {
            message.style.color = 'red';
            message.innerHTML = 'Passwords not matching';
        }
    } else message.innerHTML = '';
}


userpwd = document.getElementById('pwd');
confirmpwd = document.getElementById('confirmpwd');
message = document.getElementById('message');
