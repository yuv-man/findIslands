
export const createMatrix = (rows, cols, isRandom) => {
    let matrix = [] ,row;

    for(let r = 0; r < rows; r++){
        row = []
        for(let c = 0; c < cols; c++){
            row.push({id: `${r}${c}`, num: isRandom? Math.round(Math.random()-0.2): 0})
        }
        matrix.push(row)
    }
    return matrix
}
