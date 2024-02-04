let row = 6;
let col = 8;
let table = document.createElement('table');
for (let i = 0; i < row; i++) {
    let tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            let node = document.createElement('td');
            node.textContent = 'ex';
            tr.appendChild(node);
        }
        table.appendChild(tr);
    }
document.body.appendChild(table);