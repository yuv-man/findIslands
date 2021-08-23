

export const drawIsland = (grid, r,c, num) => {
        let matrix = [...grid]
        if(num === 0){
            matrix[r][c].num = 1
        } else {
            matrix[r][c].num = 0
        }
    return matrix  
}