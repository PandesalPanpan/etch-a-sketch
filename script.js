// Create 16x16 square divs
const container = document.querySelector('.container');
const colors = [
    'rgba(255, 0, 0, 0.1)',
    'rgba(0, 0, 255, 0.1)',
    'rgba(255, 255, 0, 0.1)',
    'rgba(0, 128, 0, 0.1)'
];

function getRandomColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}

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
                // Add an eventlistener that adds a random css color

                row.addEventListener('mouseover', () => {
                    currentColor = row.style.backgroundColor;
                    if (currentColor)
                    {
                        const rgbaMatch = currentColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
                        if (!rgbaMatch) {
                            console.log(currentColor);
                            console.error("The color is not in RGBA format - Probably already maxed");
                            return
                        }

                        const currentAlpha = parseFloat(rgbaMatch[4]);
                        const red = parseInt(rgbaMatch[1]);
                        const green = parseInt(rgbaMatch[2]);
                        const blue = parseInt(rgbaMatch[3]);

                        const newColor = `rgba(${red}, ${green}, ${blue}, ${Math.min(1, currentAlpha + 0.1)})`;
                        row.style.backgroundColor = newColor;
                    } else {
                        row.style.backgroundColor = getRandomColor();
                    }
                });
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

