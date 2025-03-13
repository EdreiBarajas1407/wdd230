const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        this.list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            this.list.removeChild(li);
            input.focus();
        });

        input.focus();

        input.value = '';
    }
    else {
        input.focus();
        input.value = 'Insert something';
    }
});