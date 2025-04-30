// Create 16x16 square divs
const container = document.querySelector('.container');
console.log('Test')

// Display 16 boxes in a single row, and create 16 rows
// Create the first Columns w/ display flex
for (let i = 0; i < 16; i++)
{
    const column = document.createElement('div');
    column.classList.add('column');
    // Loop through 16 columns to add the rows
    for (let j = 0; j < 16; j++)
    {
        const row = document.createElement('div')
        row.classList.add('row');
        column.appendChild(row);
    }

    container.appendChild(column);
}


