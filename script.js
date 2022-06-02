function addTask() {
    document.getElementById('submit').addEventListener('click', function() {
        // Seleciona local onde será criado tag HTML
        const list = document.getElementById('sub-container');

        // Seleciona local onde está valor do input
        const text = document.getElementById('task');

        // Cria tags HTML
        const input = document.createElement('input');
        const label = document.createElement('label');
        const div = document.createElement('div')

        // Cria atributo type e class
        const type = document.createAttribute('type');
        const className = document.createAttribute('class');
        const classDiv = document.createAttribute('class');
        

        // Adiciona propriedade no atributo type e class
        type.value = 'checkbox';
        className.value = 'checkbox';
        classDiv.value = 'check-task';
      
        // Define um texto para tag HTML
        label.textContent = text.value;

        // Envia atributo para tag input
        input.setAttributeNode(type);
        input.setAttributeNode(className);
        div.setAttributeNode(classDiv);

        // Inserir no local DOM tag HTML
        list.appendChild(div);
        div.appendChild(input);
        div.appendChild(label);

        // Limpa valor do input
        text.value = '';

        // Local no input
        text.focus();
    })
}

/*
const lineThrough = () => {
    document.getElementById('checkbox').addEventListener('click', () => {
        const style = document.createAttribute('style');
        
        style.value = 'text-decoration: line-through;'
        console.log('função')
    });
}
*/



// Chama o site
window.addEventListener('load', addTask);

