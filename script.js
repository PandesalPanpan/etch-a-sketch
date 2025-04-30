// Create 16x16 square divs
const container = document.querySelector('.container');


// Create a function that creates a grid
function updateGrid(gridSize = 16)
{
    // Check if grid exists
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < gridSize; i++)
        {
            const column = document.createElement('div');
            column.classList.add('column');
            // Loop through 16 columns to add the rows
            for (let j = 0; j < gridSize; j++)
            {
                const row = document.createElement('div')
                row.classList.add('row');
                column.appendChild(row);
            }
        
            container.appendChild(column);
        }
}
// Output -> Clears the container and adds the new grid


const changeBtn = document.querySelector('button').addEventListener('click', () => {
    let newGridSize;
    
    do
    {
        newGridSize = +prompt("Number of Squares", "16");
    }   while(newGridSize > 100 || newGridSize <= 0)

    updateGrid(newGridSize);
});

updateGrid();

