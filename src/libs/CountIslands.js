export const numOfIslands = (grid, rows, cols) => {

    let countIslands = 0 

    const checkDirections = (row, col) => {
        if(row >= 0 && row < rows && col >=0 && col < cols && grid[row][col].num === 1){
            grid[row][col].num = `island-${countIslands}`;
            checkDirections(row+1, col)
            checkDirections(row-1, col)
            checkDirections(row, col+1)
            checkDirections(row, col-1)
            checkDirections(row-1, col-1)
            checkDirections(row-1, col+1)
            checkDirections(row+1, col-1)
            checkDirections(row+1, col+1)
        } 
    }

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col].num === 1 ){
                countIslands += 1
                checkDirections(row, col)
            }
        }
    }

    return [countIslands,grid]
}
