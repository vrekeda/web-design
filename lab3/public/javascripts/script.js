function changeCols() {
    let colsAmount = document.getElementsByName('col-amount').item(0).value;
    if (colsAmount > 8) {
        alert('Maximum allowed is 8');
        return;
    }
    let commonRow = document.getElementsByClassName('table-row').item(0);
    var dif = Math.abs((colsAmount - commonRow.getElementsByClassName('table-cell').length));
    var rowsAmount = document.getElementsByClassName('table-row').length;
    if (commonRow.getElementsByClassName('table-cell').length < colsAmount) {
        for (let i = 0; i < rowsAmount-1; i++) {
            let currentRow = document.getElementsByClassName('table-row').item(i);
            for (let j = 0; j < dif; j++) {
                var input = document.createElement('input');
                input.type = 'text';
                input.classList.add('table-cell');
                input.name = 'cell-content';
                currentRow.appendChild(input);
            }
        }
		let currentRow = document.getElementsByClassName('table-row').item(rowsAmount-1);
            for (let j = 0; j < dif; j++) {
                var input = document.createElement('input');
                input.type = 'text';
                input.classList.add('table-cell0');
                input.name = 'cell-content';
                currentRow.appendChild(input);
            }

    } else if (commonRow.getElementsByClassName('table-cell').length > colsAmount) {
        for (let i = 0; i < rowsAmount-1; i++) {
            let currentRow = document.getElementsByClassName('table-row').item(i);
            for (let j = 0; j < dif; j++) {
                let length = currentRow.getElementsByClassName('table-cell').length;
                let toDelete = currentRow.getElementsByClassName('table-cell').item(length - 1);
                currentRow.removeChild(toDelete);
            }
        }
		let currentRow = document.getElementsByClassName('table-row').item(rowsAmount-1);
            for (let j = 0; j < dif; j++) {
                let length = currentRow.getElementsByClassName('table-cell0').length;
                let toDelete = currentRow.getElementsByClassName('table-cell0').item(length - 1);
                currentRow.removeChild(toDelete);
            }
    } else {
        alert('Same cols amount as now')
    }
			    let table = document.getElementsByClassName('table').item(0);

           for (let i = 0; i < colsAmount; i++) {
				document
            .getElementsByClassName('table-row')
            .item(table.getElementsByClassName('table-row').length-1)
		   .getElementsByClassName('table-cell0').item(i).value=colsAmount;}
}

function changeRows() {
    var rowsAmount = document.getElementsByName('row-amount').item(0).value;
    if (rowsAmount > 20) {
        alert('Maximum allowed is 20');
        return;
    }
    let table = document.getElementsByClassName('table').item(0);
	let oldAmount = table.getElementsByClassName('table-row').length;
    let dif = Math.abs(rowsAmount - oldAmount);
    let colsAmount = document
            .getElementsByClassName('table-row')
            .item(0)
            .getElementsByClassName('table-cell').length;
	
    if (oldAmount < rowsAmount) {
		let table = document.getElementsByClassName('table').item(0);
            let length = table.getElementsByClassName('table-row').length;
            let toDelete = table.getElementsByClassName('table-row').item(length - 1);
            table.removeChild(toDelete);
        for (let i = 0; i < dif+1; i++) {
            let row = document.createElement('div');
            row.classList.add('table-row');
            for (let i = 0; i < colsAmount; i++) {
                var input = document.createElement('input');
				input.value="";
                input.type = 'text';
                input.classList.add('table-cell');
                input.name = 'cell-content';
                row.appendChild(input);
            }
            table.appendChild(row);
        }
		            let row = document.createElement('div');

            row.classList.add('table-row');
            for (let i = 0; i < colsAmount; i++) {
				/* document
            .getElementsByClassName('table-row')
            .item(oldAmount-1)
            .getElementsByClassName('table-cell').item(i).value="";
			document
            .getElementsByClassName('table-row')
            .item(oldAmount-1)
            .getElementsByClassName('table-cell').item(i).classList='table-cell'; */
                var input = document.createElement('input');
                input.type = 'text';
				input.value = colsAmount;
                input.classList.add('table-cell0');
                input.name = 'cell-content';
                row.appendChild(input);
            }
            table.appendChild(row);
    } else if (document.getElementsByClassName('table-row').length > rowsAmount) {
        let table = document.getElementsByClassName('table').item(0);
        for (let j = 0; j < dif; j++) {
            let length = table.getElementsByClassName('table-row').length;
            let toDelete = table.getElementsByClassName('table-row').item(length - 1);
            table.removeChild(toDelete);
        }
		let row = document.createElement('div');

            row.classList.add('table-row');
            for (let i = 0; i < colsAmount; i++) {
                var input = document.createElement('input');
                input.type = 'text';
				input.value = colsAmount;
                input.classList.add('table-cell0');
                input.name = 'cell-content';
                row.appendChild(input);
            }
            table.appendChild(row);
    } else {
        alert('Same rows amount as now')
    }
		
}